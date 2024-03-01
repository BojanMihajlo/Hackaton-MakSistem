import { createContext, useEffect, useState } from "react";


const UserContext = createContext({
    
    registerHandler: () => {},
    logoutHandler: () => {},
   
    usernameHandler:"",
    onChangeUsername: () => {},

    emailHandler:"",
    onChangeEmail: () => {},
    passwordHandler:"",
    onChangePassword: () => {},
   
    confirmHandler:"",
    onChangeConfirm: () => {},

    errorMessage:"",
    checkUser :"",

    loginEmailHandler:"",
    onChangeLoginEmail: () => {},
    loginPasswordHandler:"",
    onChangeLoginPassword: () => {},
    loginHandler: () => {},
    checkEmailLogin:"",

    topTenCrypto:"",

    assetPlatforms:"",
    setAssetPlatforms:"",

    limit:"",
    setLimit:"",
    handleAssetPlatforms: () => {},
    handleCoinsPlatforms: () => {},
    buttonText:"",

    searchAsset:"",
    setSearchAsset:"",

    newFromSearch:"",
    setNewFromSearch:"",
    setStateAsset:"",
    stateAsset:"",

    allCoins:"",
    setAllCoins:"",
    allCoinSearch:"",
    setAllCoinSearch:"",

    coinState:"",
    setCoinState:"",
    newFromCoin:"",
    setNewFromCoin:"",
   
    saveCoin: () => {},

    coins:"",

    saveButton:"",
    setSaveButton:"",

    rows:"",
    handleDelete:() => {},
    setSelectedRows:"",
   
  });
  
  export const UserContextProvider = (props) => {
    
    const [usernameHandler, setUsernameHandler] = useState("")

    const onChangeUsername = (event) => {
      setUsernameHandler(event.target.value)
    }

    const [emailHandler,setEmailHandler] = useState("")

    const onChangeEmail = (event) => {
      setEmailHandler(event.target.value)
    }
    
    const [passwordHandler,setPasswordHandler] = useState("")

    const onChangePassword = (event) => {
      setPasswordHandler(event.target.value)
    }

    const [confirmHandler,setConfirmHandler] = useState("")

    const onChangeConfirm = (event) => {
      setConfirmHandler(event.target.value)
    }

    const [errorMessage,setErrorMessage] = useState("")
    const checkUser = localStorage.getItem("username") || [];
    
      const registerHandler = () => {

        if (usernameHandler !== "" && emailHandler !== "" && passwordHandler!== "" && confirmHandler !== "" 
        && passwordHandler===confirmHandler){
        
          localStorage.setItem("username", usernameHandler);
          localStorage.setItem("email", emailHandler);
          localStorage.setItem("password", passwordHandler);
          setErrorMessage("");
          window.location.reload(false);
              
        } else {
           setErrorMessage("Invalid email or password")
        } 
      };

      //register page logic...

      const [loginEmailHandler,setLoginEmailHandler] = useState("")
      const onChangeLoginEmail = (event) => {
        setLoginEmailHandler(event.target.value)
      }

      const [loginPasswordHandler,setLoginPasswordHandler] = useState("")
      const onChangeLoginPassword = (event) => {
        setLoginPasswordHandler(event.target.value)
      }

   const checkEmail = localStorage.getItem("email")
   const checkPass = localStorage.getItem("password")
      const loginHandler = () => {
         if(loginEmailHandler === checkEmail && loginPasswordHandler === checkPass) {
          localStorage.setItem("emailLogin", loginEmailHandler)
          localStorage.setItem("passwordLogin", loginPasswordHandler)
          setErrorMessage("")
          localStorage.removeItem("email")
          localStorage.removeItem("password")
          window.location.reload(false);
         }
         else {
          setErrorMessage("Invalid email or password")
         }
      }
    const checkEmailLogin = localStorage.getItem("emailLogin")

    ///login page logic...

      const logoutHandler = () => {
  
        localStorage.clear()
        window.location.reload(false);
       
      };
   
      ///logout page logic...

      const [topTenCrypto,setTopTenCrypto] = useState([])

      useEffect(() => {
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
        )
          .then((response) => response.json())
          .then((response) => {
            setTopTenCrypto(response);
          });
      }, []);
    
     ///homepage logic...

      const [assetPlatforms,setAssetPlatforms] = useState([])
      const [searchAsset,setSearchAsset] = useState([])
      const [newFromSearch,setNewFromSearch] = useState([])
      const [stateAsset,setStateAsset] = useState(false)
      const [buttonText,setButtonText] = useState("Load more..")
      const [limit, setLimit] = useState(10);
      const max= 210;

      const handleAssetPlatforms = () => {
        if (limit < max) {
          setLimit(limit + 10);
        }else  {
         setButtonText("No more text")
        }
      }
      useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/asset_platforms ")
      .then((response) => response.json())
      .then((response) => {
        const filterData = response.filter(
          (element, index) => index < limit
        );
        setAssetPlatforms(filterData);
        setSearchAsset(response);
      });
    return () => {};
  }, [limit]);
    
  ///assetplatforms page logic....

      const [limit2, setLimit2] = useState(10);
      const max1= 30;

      const handleCoinsPlatforms = () => {
        if (limit2 < max1) {
          setLimit2(limit2 + 10);
        }else  {
         setButtonText("No more text")
        }
      }

      const [allCoins,setAllCoins] = useState([])
      const [allCoinSearch,setAllCoinSearch] = useState([])
      const [coinState,setCoinState] = useState(false)
      const [newFromCoin,setNewFromCoin] = useState([])

      useEffect(() => {
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        )
          .then((response) => response.json())
          .then((response) => {
            const filterData = response.filter(
              (element, index) => index < limit2
            );
            setAllCoins(filterData);
            setAllCoinSearch(response)
          });
      }, [limit2]);
  
      const initCoins ={
        coins:[],
      }
        
    const [coins,setCoins] = useState(initCoins)
    const [saveButton,setSaveButton] = useState([])

    const getFromLocal = JSON.parse(localStorage.getItem("items")) || [];
     
      const saveCoin = (index,coin) => { 
        setCoins((prev) => {
          const newItem ={
          ...prev,
          coins:[...prev.coins,coin],   
        };
        setSaveButton(index)
        localStorage.setItem('items', JSON.stringify(newItem))
        return newItem
      }) 
      };

     ///cryptocurrencies page logic...

      const [rows, setRows] = useState(getFromLocal.coins || []);
      const [selectedRows, setSelectedRows] = useState([]);

      const handleDelete = (id) => {
        const selectedids = new Set(selectedRows);
    
        setRows((r) => r.filter((x) => !selectedids.has(x.id)));
    
        const fina = rows.filter((x) => !selectedids.has(x.id));
    
        const newItem = {
          coins: fina,
        };
    
        localStorage.setItem("items", JSON.stringify(newItem));
      };


      ///mycoins page logic...
      
      return(

        <UserContext.Provider
        value={{
         
          registerHandler: registerHandler,
          logoutHandler: logoutHandler,
         
          usernameHandler:usernameHandler,
          onChangeUsername:onChangeUsername,

          emailHandler:emailHandler,
          onChangeEmail:onChangeEmail,

          passwordHandler:passwordHandler,
          onChangePassword:onChangePassword,

          confirmHandler:confirmHandler,
          onChangeConfirm:onChangeConfirm,

          errorMessage:errorMessage,
          checkUser:checkUser,

          loginEmailHandler:loginEmailHandler,
          onChangeLoginEmail:onChangeLoginEmail,
          loginPasswordHandler:loginPasswordHandler,
          onChangeLoginPassword:onChangeLoginPassword,
          loginHandler:loginHandler,
          checkEmailLogin:checkEmailLogin,

          topTenCrypto:topTenCrypto,
          setTopTenCrypto:setTopTenCrypto,

          assetPlatforms:assetPlatforms,
          setAssetPlatforms:setAssetPlatforms,
         
          limit:limit,
          setLimit:setLimit,

          handleAssetPlatforms:handleAssetPlatforms,
          handleCoinsPlatforms:handleCoinsPlatforms,
          buttonText:buttonText,
          allCoins:allCoins,
          setAllCoins:setAllCoins,

          searchAsset:searchAsset,
          setSearchAsset:setSearchAsset,
          newFromSearch:newFromSearch,
          setNewFromSearch:setNewFromSearch,
          stateAsset:stateAsset,
          setStateAsset:setStateAsset,
          
          saveCoin:saveCoin,

          saveButton:saveButton,
          setSaveButton:setSaveButton,

          rows:rows,
          handleDelete:handleDelete,
          setSelectedRows:setSelectedRows,
          coins:coins,

          allCoinSearch:allCoinSearch,
          setAllCoinSearch:setAllCoinSearch,
          coinState:coinState,
          setCoinState:setCoinState,
          newFromCoin:newFromCoin,
          setNewFromCoin:setNewFromCoin,

        }}
      >
        {props.children}
      </UserContext.Provider>
      )
    
  }

  export default UserContext;