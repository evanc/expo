import { UnavailabilityError } from '@unimodules/core';
import ExpoSplashScreen from './ExpoSplashScreen';
export { default as AppLoading } from './AppLoading';
export * from './AppLoading';
/**
 * Makes the native splash screen stay visible until `SplashScreen.hideAsync()` is called.
 * It has to ba celled before any View is created.
 *
 * @example
 * ```typescript
 * // top level component
 *
 * SplashScreen.preventAutoHideAsync()
 *  .then(() => console.log('SplashScreen.preventAutoHideAsync returned'))
 *  .catch(error => console.log(`SplashScreen.preventAutoHideAsync error: ${error}`));
 *
 * class App extends React.Component {
 *   ...
 *   SplashScreen.hideAsync()
 *    .then(() => console.log('SplashScreen.hideAsync returned'))
 *    .catch(error => console.log(`SplashScreen.hideAsync error: ${error}`));
 *   ...
 * }
 * ```
 */
export async function preventAutoHideAsync() {
    if (!ExpoSplashScreen.preventAutoHideAsync) {
        throw new UnavailabilityError('expo-splash-screen', 'preventAutoHideAsync');
    }
    return await ExpoSplashScreen.preventAutoHideAsync();
}
export async function hideAsync() {
    if (!ExpoSplashScreen.hideAsync) {
        throw new UnavailabilityError('expo-splash-screen', 'hideAsync');
    }
    return await ExpoSplashScreen.hideAsync();
}
//# sourceMappingURL=SplashScreen.js.map