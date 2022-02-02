import { ReactNode } from "react";
import { ModalProps } from 'react-native-modal';
import { RBProps } from "./raw-bottom";
export declare type ModalOpt = Partial<Omit<ModalProps, 'isVisible' | 'children'>>;
export declare const modalInstance: {
    show(children: ReactNode, options?: Partial<Pick<ModalProps, "style" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onDismiss" | "onSwipeStart" | "onSwipeMove" | "onSwipeComplete" | "onSwipeCancel" | "swipeDirection" | "onShow" | "hardwareAccelerated" | "onOrientationChange" | "presentationStyle" | "animationIn" | "animationInTiming" | "animationOut" | "animationOutTiming" | "avoidKeyboard" | "coverScreen" | "hasBackdrop" | "backdropColor" | "backdropOpacity" | "backdropTransitionInTiming" | "backdropTransitionOutTiming" | "customBackdrop" | "useNativeDriver" | "useNativeDriverForBackdrop" | "deviceHeight" | "deviceWidth" | "hideModalContentWhileAnimating" | "propagateSwipe" | "onModalShow" | "onModalWillShow" | "onModalHide" | "onModalWillHide" | "onBackButtonPress" | "onBackdropPress" | "swipeThreshold" | "scrollTo" | "scrollOffset" | "scrollOffsetMax" | "scrollHorizontal" | "statusBarTranslucent" | "supportedOrientations" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture">> | undefined): void;
    hide(): void;
};
export declare const rawBottomInstance: {
    show(children: ReactNode, props?: Partial<RBProps['props']>): void;
    hide(): void;
};