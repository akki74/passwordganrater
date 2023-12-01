// import { useCallback, useEffect, useRef, useState } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [symbolAllowed, setSymbolAllowed] = useState(false);
//   const [password, setPassword] = useState("");
//   //useRef hook
//   // psswordREf use for more optimize for user ui for bettr experience
//   const passwordRef = useRef(null);

//   //usecallback not only use for fun run but also responsible for memorize ,optimize,cache
//   const passwordGenrator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) {
//       str += "0123456789";
//     }
//     if (symbolAllowed) {
//       str += "!@#$%^&*-_+=[]{}~`?";
//     }
//     for (let i = 1; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1); //making random num for passwrd

//       pass += str.charAt(char); //if we can't use pass +=str.... so value will over write and show only one value so we use += to concate(append) values
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, symbolAllowed, setPassword]); //use setpassword but also use only password but it has some problm when we only giv password so it is optimize in every excution so it will chnge in every execution

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     //(passwordRef.current?.SelectionRange(0,3)) use for show copy optimization(how much code select ) with 3,4,5.... range
//     window.navigator.clipboard.writeText(password); //server side rendreing not have window object ,,window obj use in core react
//   }, [password]);

//   //we cant call setpassword directly bcz of usecallback if we not use usecallback so react through error like( to many  re-renders)so we use useeffect hook for cll setpsswrd,,,,,,useeffect not same like usecallback (usecallback use for optimization) but useeffect use for if any chnages in these usestate(length,numbers,symbol,pass) so run again
//   useEffect(() => {
//     passwordGenrator();
//   }, [length, numberAllowed, symbolAllowed, passwordGenrator]);

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-pink-800 bg-gray-400">
//         <h1 className="text-white text-center my-3 ">Password Genrator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4  ">
//           <input
//             type="text"
//             value={password}
//             className="outline w-full py-1 px-3 "
//             placeholder="password"
//             readOnly
//             ref={passwordRef}
//           />

//           <button
//             onClick={copyPasswordToClipboard}
//             className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 focus:bg-green-300 "
//           >
//             copy
//           </button>
//         </div>

//         <div className="flex text-sm gap-x-2 pb-1">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className="cursor-pointer"
//               //onchange event not use directly bcz of we want to pass an event to cll property to set value
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label>Length:{length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Numbers</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={symbolAllowed}
//               id="symbolInput"
//               //if setsymbol set in true so only one tym we got true so value will also always true so value not chnge  so we use call back with prev value access so we use !prev to make value true or false(opposite)
//               onChange={() => {
//                 setSymbolAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="symbolInput">Symbol</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
