import React, {useEffect, useRef} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
// import {Easing} from 'react-native-reanimated';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  ball: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#001972',
  },
});

const LikeScreen = () => {
  const startingPosition = 100;
  const pressed = useSharedValue(false);
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      //   x.value = withSpring(startingPosition);
      //   y.value = withSpring(startingPosition);
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.ball, uas]} />
    </PanGestureHandler>
  );
};

export default LikeScreen;
