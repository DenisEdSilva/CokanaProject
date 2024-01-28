import React, { useState } from "react";
import { View, Text,  TextInput, TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useAuth } from "../../../contexts/auth";

export function NewProduct() {
    const [category, setCategory] = useState("Bebidas");
    const [productName, setProductName] = useState("");
    const [productQuantity, setQuantity] = useState("");
    const [productPrice, setPrice] = useState("");
    const { registerProduct } = useAuth();
    
    function handleRegisterProduct() {
        if (!productName || !productQuantity || !productPrice) {
            console.log("Preencha todos os campos");
            return;
        }
        const product = {category, productName, productQuantity, productPrice};
        registerProduct(product);
    }

    const handlePriceChange = (text: string) => {

        let num = text.replace(/[^0-9]/g, '');
        if (num.length === 1) {
            num = '0.0' + num;
        } else if (num.length === 2) {
            num = '0.' + num;
        } else {
            num = num.slice(0, -2) + '.' + num.slice(-2);
        }
        const numFloat = parseFloat(num).toFixed(2);
        const formatted = `R$ ${numFloat}`;
        setPrice(formatted);
    }


    return (
        <View style={{padding: 20, alignItems: "center", }}>
            <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center"}}>Cadastro de Novo Produto</Text>
            <View 
                style={{ 
                    width: 350,
                    margin: 5,
                    borderWidth: 2,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }} 
            >
                <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                >
                    <Picker.Item label="Bebidas" value="Bebidas"/>
                    <Picker.Item label="Comidas" value="Comidas"/>
                </Picker>
            </View>
            <TextInput 
                style={{ 
                    padding: 10,
                    width: 350,
                    margin: 5,
                    borderWidth: 2,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}  
                placeholder="Nome do Produto" 
                value={productName} 
                onChangeText={(text) => setProductName(text) } 
            />
            <TextInput  
                style={{ 
                    padding: 10,
                    width: 350,
                    margin: 5,
                    borderWidth: 2,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}  
                placeholder="Quantidade"
                value={productQuantity}  
                onChangeText={(text) => setQuantity(text)} 
            />
            <TextInput  
                style={{ 
                    padding: 10,
                    width: 350,
                    margin: 5,
                    borderWidth: 2,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}  
                keyboardType="numeric"
                maxLength={10}
                placeholder="Preço" 
                value={productPrice} 
                onChangeText={handlePriceChange} 
            />

            <TouchableOpacity   
                style={{
                    width: 350,
                    alignItems: "center",
                    padding: 6,
                    borderWidth: 1,backgroundColor: "#52a3f3",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginTop: 10
                }}
                onPress={handleRegisterProduct}
            >
                <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}} onPress={handleRegisterProduct}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}