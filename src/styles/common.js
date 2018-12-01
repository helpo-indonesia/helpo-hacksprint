import { StyleSheet, Dimensions } from 'react-native'

let {height, width} = Dimensions.get('window')

const TCAccentBlue = "#007EA5";
const TCAccentGreen = "#0BB343";
const TCAccentOrange = "#C67900";
const inactiveColor = "#dedede";
const TCAccentGreen2 = "#4CB906";
const TCGray = "#aaa";

const appPadding = 10;

export default {
    common_styles,
    TCAccentBlue,
    TCAccentGreen,
    inactiveColor,
    appPadding,
    TCGray,
    TCAccentOrange,
    TCAccentGreen2
}

const common_styles = StyleSheet.create({
    // 1. LAYOUT 
    // Assets, Receive, Balance, BuySell, EditProfile, Dashboard, forgotPassword, Intro, Login, Market, Rreferal, Register, Withdrawal
    wrapper: {
        flex: 1,
        padding: this.appPading
    },
  
    // EditProfile, Dashboard, Market, Referal, Withdrawal
    mainArea: {
        flex: 8,
    },
    
    // Dashboard
    scroller: {
        marginTop: "8%",
        height: height * 0.20,
        padding: 15,
        marginBottom: "16%"
    },
    // Appear in Assets, Send, EditProfile, Dashboard, Withdrawal
    divider: {
        marginTop: this.appPading
    },
    // Appear in BuySell, Deposit, Profile, QrCode
    container: {
      backgroundColor: "#eee",
    },
  
    // EditProfile, Dashboard, Market, Referal, WIthdrawal
    gradient: {
      flex: 2,
      padding: 10,
      paddingTop: 20
    },
    
    shadowBottom: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 8,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    }
  })