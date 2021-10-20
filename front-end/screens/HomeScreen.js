import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { setServices } from "../utils/cosmos";
import ConfigureContext from "./ConfigureContext";

export default class HomeScreen extends React.Component {
  static contextType = ConfigureContext;

  state = { search: "", services: [] };

  updateSearch = (search) => {
    this.setState({ search });
  };

  async componentDidMount() {
    try {
      const results = await setServices();

      this.setState({ services: results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const services = this.state.services.filter((service) => {
      return service.service_name.includes(this.state.search);
    });

    return (
      <View>
        <SearchBar
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <Text>Hello {this.context.firstName},</Text>
        <Text>Most Popular in your community</Text>
        <FlatList
          data={services.slice(0, 3)}
          renderItem={(service) => {
            return (
              <Button
                title={service.item.service_name}
                onPress={() =>
                  this.props.navigation.navigate("Food Bank", {
                    service: service,
                  })
                }
              />
            );
          }}
          keyExtractor={(item, i) => i.toString()}
        />
        <Text h1>Services in your neighbourhood</Text>
        <FlatList
          data={services}
          renderItem={(service, i) => {
            return (
              <Button
                title={service.item.service_name}
                onPress={() =>
                  this.props.navigation.navigate("Food Bank", {
                    service: service,
                  })
                }
              />
            );
          }}
          keyExtractor={(item, i) => i.toString()}
        />
        <Text h1>Get Involved!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    flexDirection: "row",
  },
});
