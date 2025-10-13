import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Home } from './Home';

export default function App() { 
  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <Home />
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
