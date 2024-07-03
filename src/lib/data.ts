import MemoBlockchainPayment from "@/icons/BlockchainPayment";
import MemoDebitCard from "@/icons/DebitCard";
import MemoEasyPayment from "@/icons/EasyPayment";
import MemoLocalCurrency from "@/icons/LocalCurrency";

interface NavItem {
  title: string;
  path: string;
}

export const NavItems: NavItem[] = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Features",
    path: "features",
  },
];

export const NomadCan = [
  {
    icon: MemoBlockchainPayment,
    title: "Interact with Solana <br > blockchain using USSD",
    text: "Make payments from solana blockchain without internet connection",
  },
  {
    icon: MemoDebitCard,
    title: "Crypto debit card for <br>  worldwide acceptance",
    text: "Spend straight from your Solana wallet anywhere  Mastercard and Visa are accepted",
  },
  {
    icon: MemoEasyPayment,
    title: "Easy Bill Payments without <br>  bank account  issues",
    text: "No need to interact with your Nigerian bank account  before you make paymet",
  },
  {
    icon: MemoLocalCurrency,
    title: "Pay African merchants in  <br>  local currencies",
    text: "Pay African merchants directly from your Solana  wallet in their local currency",
  },
];
