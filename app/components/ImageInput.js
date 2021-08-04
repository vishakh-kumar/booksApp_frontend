import React from "react";
import {
    Alert,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert("Delete", "Are you sure you want to delete?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" },
            ]);
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log("Error reading an image ", error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {imageUri ? (
                    <Image style={styles.image} source={{ uri: imageUri }} />
                ) : (
                    <MaterialCommunityIcons
                        color={colors.medium}
                        name="camera"
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        width: 100,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
});

export default ImageInput;
