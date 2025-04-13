import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NativeModules } from 'react-native';

const { Python } = NativeModules;

async function translateJapaneseToEnglish(japaneseText) {
    try {
        const result = await Python.call('translate_text', japaneseText);
        console.log('Translated text:', result);
        return result;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
}

export default function App() {
    const [translation, setTranslation] = useState("............!!!")
    useEffect(() => {
        // Test translation
        translateJapaneseToEnglish('こんにちは、お元気ですか？')
            .then(translatedText => {
                console.log('Translation:', translatedText);
                setTranslation(translatedText);
            })
            .catch(error => {
                console.error('Translation error:', error);
            });
    }, []);

    return (
        <View>
            <Text>Translation Test App {translation}</Text>
        </View>
    );
}


// import { NativeModules } from 'react-native';

// // Access the Chaquopy Python module
// const { Python } = NativeModules;

// async function translateJapaneseToEnglish(japaneseText) {
//     try {
//         // Call the Python function defined in `my_script.py`
//         const result = await Python.call('my_script.translate_text', japaneseText);
//         console.log('Translated text:', result);
//         return result;
//     } catch (error) {
//         console.error('Error translating text:', error);
//         throw error;
//     }
// }

// // Example usage
// translateJapaneseToEnglish('こんにちは')
//     .then(translatedText => {
//         console.log('Translation:', translatedText);
//     })
//     .catch(error => {
//         console.error('Translation error:', error);
//     });




// import { NativeModules } from 'react-native';

// const { Python } = NativeModules;

// async function translateJapaneseToEnglish(japaneseText) {
//     try {
//         const result = await Python.call('translate_text', japaneseText);
//         console.log('Translated text:', result);
//         return result;
//     } catch (error) {
//         console.error('Error translating text:', error);
//     }
// }

// // Example usage
// translateJapaneseToEnglish('こんにちは').then(translatedText => {
//     console.log('Translation:', translatedText);
// });










// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';

// const App = () => {
//     const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Python Translation Example</title>
//         <script src="https://cdn.jsdelivr.net/npm/brython@3.9.5/brython.min.js"></script>
//         <script type="text/python">
//             from browser import document, ajax

//             def translate(event):
//                 input_text = document["inputText"].value
//                 if not input_text:
//                     document["outputText"].text = "Please enter text to translate."
//                     return

//                 # Use Argos Translate for translation
//                 try:
//                     import argostranslate.package
//                     import argostranslate.translate

//                     # Load the translation package (make sure it's installed)
//                     argostranslate.package.update_package_index()
//                     available_packages = argostranslate.package.get_available_packages()
//                     package_to_install = next(filter(lambda x: x.from_code == "ja" and x.to_code == "en", available_packages))
//                     argostranslate.package.install_from_path(package_to_install.download())

//                     # Perform translation
//                     translated_text = argostranslate.translate.translate(input_text, "ja", "en")
//                     document["outputText"].text = translated_text

//                 except Exception as e:
//                     document["outputText"].text = f"Error: {str(e)}"

//             document["translateButton"].bind("click", translate)
//         </script>
//     </head>
//     <body onload="brython()">
//         <h1>Python Translation Example</h1>
//         <input id="inputText" type="text" placeholder="Enter Japanese text" />
//         <button id="translateButton">Translate</button>
//         <p id="outputText"></p>
//     </body>
//     </html>`;

//     return (
//         <View style={styles.container}>
//             <WebView 
//                 originWhitelist={['*']} 
//                 source={{ html: htmlContent }} 
//                 style={{ flex: 1 }} 
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
// });

// export default App;
