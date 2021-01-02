import {useCallback, useState, useEffect, useRef} from 'react';
import {
  useFocusEffect,
  useNavigation,
  StackActions,
} from '@react-navigation/native';

const useNavigate = () => {
  const navigationInstance = useNavigation();
  const [canGoBack, setCanGoBack] = useState(false);
  const navigation = useRef(null);
  useEffect(() => {
    navigation.current = navigationInstance;
  });
  useFocusEffect(
    useCallback(() => {
      setCanGoBack(navigation.current.canGoBack());
      return () => {};
    }, []),
  );

  return {
    navigation: navigation.current,
    canGoBack,
    redirect: (path, params) => {
      navigation.dispatch(StackActions.replace(path, params));
    },
    goBack: () => {
      navigation.current.goBack();
    },
  };
};

export default useNavigate;
