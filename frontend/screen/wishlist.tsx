import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const CartScreen: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: '칼국수',
      price: 8900,
      quantity: 1,
      image: 'https://i.imgur.com/HN3b1wT.jpg', // 예시 이미지 URL
    },
    {
      id: 2,
      name: '비빔밥',
      price: 8900,
      quantity: 1,
      image: 'https://i.imgur.com/HN3b1wT.jpg',
    },
    {
      id: 3,
      name: '김치찌개',
      price: 8900,
      quantity: 1,
      image: 'https://i.imgur.com/HN3b1wT.jpg',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price.toLocaleString()}원</Text>

        <View style={styles.quantityRow}>
          <Text>수량</Text>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => updateQuantity(item.id, -1)}
          >
            <Text>−</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => updateQuantity(item.id, 1)}
          >
            <Text>＋</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>장바구니</Text>
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>
          총금액 <Text style={styles.totalPrice}>{totalPrice.toLocaleString()}원</Text>
        </Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>결제하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#0047A0',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    marginVertical: 4,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 6,
  },
  qtyButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  qtyText: {
    width: 20,
    textAlign: 'center',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: 16,
    backgroundColor: 'white',
  },
  totalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  payButton: {
    backgroundColor: '#0047A0',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
