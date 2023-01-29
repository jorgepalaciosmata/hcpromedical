import React, { useEffect } from "react";
import { useState } from "react";
import { View, Button , TextInput, ScrollView, StyleSheet, Text } from 'react-native';

const HistorialMedicoScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Historial</Text>
      <iframe src='https://hcpromedical-api-hcpromedi-393663602081.s3.us-east-1.amazonaws.com/road.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCuDrwhb%2B9L8T2I19wJtMmES4dNKieCUoZKKrSD%2Bf1ArwIgRdxgndpdihjem1TISTwNKxhTtdjGQWLV958Ee5V3pKYq5AIIYhAAGgwzOTM2NjM2MDIwODEiDE4eea5u2cjqNrWQuSrBAr8%2BMJcR2IHI70iibqx9Z8XafF7SssX3je5yZ2X8lXxJT%2FTQxoPJKJVHJr0%2FHgcQ%2FnvIG7isW2admXbbJtHbT%2B2dZPxsTJE0pkEty%2FQGUGMzODuwpZ%2FDRbl0GBjNwBLod43t67D2q2Vg05ET0Rpb4LX4L1fGD%2F%2B%2Bx68O0Q%2Bz8vFfWiqc0h%2BUl07AKIDg0%2BY%2Fwp7u19DE2bkiO5lN9Jbslci0dfc7ZJBmLYWPsMU28EZvVUkwMt12ZvZ%2Bz1lpXmgbarBhR3%2B0xpXs4etoPqCAVS5uP1HJV1xAE%2FZpaxtU74NvTB4b9ThLuqYgHxK%2B6WoT8xK5m3c7EpxskUmzYOdrUxZMjhcWEmwqCxaVBt6UQTE2n%2BbRGsLSFn7T%2BI4DzwnJVuBpFePlO130id4pDioAjb59fX9wGGdsYCy%2FR5q%2Fga2x6DCEm9WeBjqzAqV7en6Bk0ecBBy3hxY7vqaZBB0Ex2WAnC8nLnYTMUaDOv1jfc%2FxNDP0KGzSzp5bU1ef06OT7LveRsGAzKuIDhYincT22qvc38tMKBlf2my946Gh9mZD8uzEIMi0FQQ0%2BCrahbg6cb0h2DmxQdQcDK5Rx%2F5ciZbbQJKqrL57tkmTr8HusCwMpfGlPQR%2FWzmUMX54rdI8aBtZk3le0FYsfIk371dMsRfpEwLSBu3d2wBBWU5XKA5qSWenj%2FdwRsCssPGYU491uhX%2BIkuAhOEGZgl0Qj6wR7xw7%2F1qvdpWoKDezFjD1ChPYe2d3u5TP6FlgvFlok%2BIdAxNy4u56RwrEt9JXfy4sR8sn89sg0ck3L8dxQDbJIlWKGml8bLbdT7QkGgddANMsXWQUNT3rq9cXcBGvVo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230128T165101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVXKBN3WQXOJ7TC7O%2F20230128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=858d580af4aae747289445ccbe27f70ef79138a04ec823a7016ebbd6ad119e51' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      padding: 35
  },
  inputStyle: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderRadius: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
  }
})

export default HistorialMedicoScreen;