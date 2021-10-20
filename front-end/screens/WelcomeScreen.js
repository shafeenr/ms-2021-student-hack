import React, { Component } from "react";
import { setCities } from "../utils/cosmos";
import ConfigureContext from "./ConfigureContext";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { View, Text, Button, Image } from "react-native-ui-lib";

export default class Example extends Component {
  state = { cities: [] };

  static contextType = ConfigureContext;

  updateCity = (city) => {
    this.context.setCity(city);
  };

  async componentDidMount() {
    const results = await setCities();

    this.setState({ cities: results });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text black text20 center marginT-75 style={{ fontWeight: "bold" }}>
          Welcome
        </Text>
        <Text black text30 center marginT-25>
          {" "}
          Please select a city
        </Text>

        {this.context.city?.square_logo && (
          <Image
            source={{ uri: this.context.city?.square_logo }}
            style={styles.square_logo}
            marginH-85
            marginT-15
          />
        )}

        <View>
          <Picker
            selectedValue={this.context.city}
            onValueChange={this.updateCity}
          >
            {this.state.cities.map((city) => {
              return (
                <Picker.Item label={city.name} value={city} key={city.name} />
              );
            })}
          </Picker>
        </View>

        <Button
          link
          text70
          blue30
          label="Next"
          onPress={() => this.props.navigation.navigate("Configuration")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  square_logo: {
    width: 200,
    height: 200,
  },

  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "black",
  },
});
