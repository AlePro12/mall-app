import Animated from "react-native-reanimated";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  List,
  Divider,
  Modal,
  Portal,
} from "react-native-paper";
import React, { useState } from "react";

const Shops = () => {
  const [open, setOpen] = useState(false);
  const { width, height } = Dimensions.get("window");
  const [shops, setShops] = useState(
    [
      {
        id: 1,
        name: "Multimax",
        description: "Electrodomesticos y tecnologia",
        image:
          "https://multimaxstore.com/wp-content/uploads/2022/10/cropped-multimax-icono.png",
        info: "Tienda de electrodomesticos y tecnologia, ubicada en el nivel feria del centro comercial Sambil Maracaibo",
      },
      {
        id: 2,
        name: "Balú",
        description: "Ropa y accesorios",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_nwS2Uwo0ryEbFzWi7du7lQT2cXk18x4fQ&s",
      },
      {
        id: 3,
        name: "Airtek",
        description: "Internet y tecnologia",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8AIaTAv9JBpwFaqBLbtgX5IcFB8pSIsIKQ&s",
      },
      {
        id: 4,
        name: "US Polo",
        description: "Ropa y accesorios",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor4SH0_7NbjziYfGAVrIvr3b2x8s7IEhnIA&s",
      },
      {
        id: 5,
        name: "JUMP",
        description: "Calzado y accesorios",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaJBESA6zA6nSzqGRMq6ohjcUzEKNgc94BA&s",
      },
      {
        id: 6,
        name: "Reebok",
        description: "Calzado y accesorios",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGPfy0GTIow-3LyOXbTdov5XcYyHLkcaEtA&s",
      },
      {
        id: 7,
        name: "Adidas",
        description: "Calzado y accesorios",
        image:
          "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
      },
      {
        id: 8,
        name: "Optica Caroní",
        description: "Lentes y accesorios",
        image:
          "https://www.sambilonline.com/media/catalog/product/cache/a1cb369fbb97f0c657cc0ebfb1b15ce0/o/p/optica_caroni_1_.webp",
      },
      {
        id: 9,
        name: "OptiColor",
        description: "Lentes y accesorios",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUBd1aCA61V_KkA0HITpJAAZLZ31XPagnEA&s",
      },
    ].sort((a, b) => a.name.localeCompare(b.name))
  );

  //divider in list
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <List.Section
            title="Tiendas"
            titleStyle={{ fontSize: 30, fontWeight: "bold" }}
          >
            {shops.map((shop) => (
              <>
                <List.Item
                  key={shop.id}
                  title={shop.name}
                  onPress={() => setOpen(shop.id)}
                  description={shop.description}
                  left={(props) => (
                    <Avatar.Image
                      size={50}
                      source={{ uri: shop.image }}
                      //white background
                      {...props}
                      style={[{ backgroundColor: "white" }, props.style]}
                    />
                  )}
                />
                <ViewShop
                  shop={shop}
                  open={open === shop.id}
                  setOpen={setOpen}
                />
                <Divider />
              </>
            ))}
          </List.Section>
        </View>
      </ScrollView>
    </>
  );
};

const ViewShop = ({ shop, open, setOpen }) => {
  return (
    <Portal>
      <Modal visible={open} onDismiss={() => setOpen(false)}>
        <Card>
          <Card.Title
            title={shop.name}
            subtitle={shop.description}
            left={(props) => (
              <Avatar.Image
                size={50}
                source={{ uri: shop.image }}
                //white background
                {...props}
                style={[{ backgroundColor: "white" }, props.style]}
              />
            )}
          />
          <Card.Cover source={{ uri: shop.image }} />
          <Card.Content>
            <Text>{shop.info}</Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => setOpen(false)}>Cerrar</Button>
          </Card.Actions>
        </Card>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Shops;
