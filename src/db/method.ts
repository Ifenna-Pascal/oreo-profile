import firebaseConfig from "./firebase_config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
} from "firebase/firestore";

// initilaize app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "bookings");
const colRef2 = collection(db, "contact");

interface IBooking {
    name: string;
    mobile: string;
    department: string;
    service: string;
    doctor: string;
  }

  interface IContact {
    name: string;
    mobile: string;
    message: string;
    email: string;
  }
const addBooking = async (arg: IBooking) => {
  const { name, mobile, department, service, doctor,} = arg;
  const result = await addDoc(colRef, {
    name,
    mobile,
    department,
    service,
    doctor,
  });
  return result;
};

const addContact = async (arg: IContact) => {
    const { name, mobile, message, email } = arg;
    const result = await addDoc(colRef2, {
      name,
      mobile,
      message,
      email
    });
    return result;
    
}


const getCollectionData = (setTransactions: any) => {
  const q = query(collection(db, "bookings"));
  onSnapshot(q, (querySnapshot:any) => {
    setTransactions(
      querySnapshot.docs.map((doc:any) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  });
};

export { addBooking, addContact, getCollectionData }