import "./NewUser.css";
import { CalendarToday, FmdGoodOutlined, MailOutline, PermIdentity, PhoneAndroid, PhotoCameraOutlined } from "@mui/icons-material";

export default function NewUser(){
    return (
        <div className="newUser">
            <h3 className="newUserTitle">New User</h3>
            <form >
                {/* <div className="newUserAvatar">
                    <label htmlFor="avatar" className="userEidtRightAvatarlabel">
                    <img className="newUserImg" src="https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span className="newUserAvatarMask"><PhotoCameraOutlined /></span>
                    <input className="newUserItemInput" type="file" name="avatar" id="avatar" style={{display: 'none'}} />
                    </label>
                </div> */}
                <div className="newUserItem">
                    <label htmlFor="">Name</label>
                    <input className="newUserItemInput" type="text" name="name" placeholder="Name" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input className="newUserItemInput" type="email" name="email" placeholder="Email" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input className="newUserItemInput" type="text" name="phone" placeholder="Phone" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input className="newUserItemInput" type="text" name="address" placeholder="Address" />
                </div>
                <div className="newUserItem">
                    <button className="newUserItemBtn">Update</button>
                </div>
                </form>
        </div>
    )
}