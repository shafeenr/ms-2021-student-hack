import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import ConfigureContext from "./ConfigureContext";
import axios from "axios";

const ConfigureScreen = ({ navigation: { navigate }, route }) => {
  const [dict, setDict] = useState({});
  useEffect(() => {
    (async () => {
      let response = await axios.get(
        "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation"
      );
      Object.keys(response.data.translation).forEach((key) => {
        dict[key] = response.data.translation[key]["name"];
      });
      setDict({ ...dict });
    })();
  }, []);
  const configureContext = useContext(ConfigureContext);
  return (
    <View>
      <Text style={styles.subtitle}>Name</Text>
      <View style={styles.fieldName}>
        <TextInput
          style={styles.firstInput}
          placeholder="First Name"
          onChangeText={(firstName) => configureContext.setFirstName(firstName)}
        ></TextInput>
        <TextInput
          style={styles.firstInput}
          placeholder="Last Name"
          onChangeText={(lastName) => configureContext.setLastName(lastName)}
        ></TextInput>
      </View>
      <Text style={styles.subtitle}>Address</Text>
      <View style={styles.addressField}>
        <TextInput
          style={styles.addressInput}
          placeholder="Address Line 1"
          onChangeText={(addressLine1) =>
            configureContext.setAddressLine1(addressLine1)
          }
        ></TextInput>
      </View>
      <View style={styles.addressField}>
        <TextInput
          style={styles.addressInput}
          placeholder="Address Line 2 (Optional)"
          onChangeText={(addressLine2) =>
            configureContext.setAddressLine2(addressLine2)
          }
        ></TextInput>
      </View>
      <View style={styles.addressField}>
        <TextInput
          style={styles.addressInput}
          placeholder="Postal/Zip Code"
          maxLength={10}
          onChangeText={(postalCode) =>
            configureContext.setPostalCode(postalCode)
          }
        ></TextInput>
      </View>
      <Text style={styles.subtitle2}>Phone</Text>
      <View style={styles.addressField}>
        <TextInput
          style={styles.telephoneInput}
          placeholder="Country Code"
          maxLength={6}
          keyboardType="numeric"
          onChangeText={(countryCode) =>
            configureContext.setCountryCode(countryCode)
          }
        ></TextInput>
        <TextInput
          style={styles.telephoneInput2}
          placeholder="Phone Number"
          maxLength={15}
          keyboardType="numeric"
          onChangeText={(phoneNumber) =>
            configureContext.setPhoneNumber(phoneNumber)
          }
        ></TextInput>
      </View>
      <Text style={styles.subtitle2}>Language</Text>
      <Picker
        selectedValue={configureContext.language}
        onValueChange={(value) => configureContext.setLanguage(value)}
        style={styles.pickerStyle}
      >
        {Object.keys(dict).map((key) => {
          return <Picker.Item key={key} label={dict[key]} value={key} />;
        })}
      </Picker>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigate("Home")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfigureScreen;

const styles = StyleSheet.create({
  firstInput: {
    flex: 1,
    height: 40,
    width: 175,
    margin: 12,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    fontSize: 16,
  },
  buttonText: {
    height: 40,
    width: 175,
    margin: 12,
    paddingBottom: 15,
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  telephoneInput: {
    flex: 1,
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    fontSize: 16,
  },
  telephoneInput2: {
    flex: 1,
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    fontSize: 16,
  },
  addressInput: {
    flex: 1,
    height: 40,
    width: 375,
    margin: 12,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    fontSize: 16,
  },
  fieldName: {
    flexDirection: "row",
    fontSize: 20,
    paddingLeft: 2,
  },
  addressField: {
    flex: 1,
    flexDirection: "row",
    fontSize: 20,
    paddingLeft: 2,
    paddingBottom: 50,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 15,
  },
  subtitle2: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 35,
    paddingLeft: 15,
  },
  buttonStyle: {
    borderRadius: 25,
    color: "black",
    position: "relative",
    bottom: 0,
    alignItems: "center",
    backgroundColor: "black",
    width: 150,
    height: 50,
    marginBottom: 0,
    marginLeft: 130,
  },
  pickerStyle: {
    flex: 1,
    marginTop: 15,
    marginLeft: 30,
    width: 200,
    transform: [{ scaleX: 1.25 }, { scaleY: 1.25 }],
  },
});
