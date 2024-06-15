import React, { useState, useEffect, useRef } from "react";

const Profile = () => {
    const sampleUser = {
        name: "test name",
        email: "testEmail@domain.com",
        password: "testPassword",
        ext: "+1",
        phone: "1234567890",
        address: "test address",
    };

    const samplePet = {
        name: "charlie",
        breed: "Golden Retriever",
        age: 1,
        gender: "Male",
        healthIssues: "None",
        dietRestrictions: "None"
    };

    // user profile section states
    const [user, setUser] = useState(sampleUser);
    const [userEdit, setUserEdit] = useState(false);
    const updateUserField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleUserEdit = (e) => {
        e.preventDefault();
        setUserEdit(!userEdit);
    }

    // update user data in database
    const handleUserSave = (e) => {
        e.preventDefault();
        // fetch call to update user data

        setUserEdit(!userEdit);
    }

    // pet profile section states
    const [pet, setPet] = useState(samplePet);
    const [petEdit, setPetEdit] = useState(false);

    const updatePetField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPet({ ...pet, [name]: value });
    }

    const handlePetEdit = (e) => {
        e.preventDefault();
        setPetEdit(!petEdit);
    }

    const handlePetSave = (e) => {
        e.preventDefault();
        // fetch call to update pet data

        setPetEdit(!petEdit);
    }

    return (
        <div>
            <div id="userProfileCard">
                <h2>User Profile</h2>
                {
                    userEdit ?
                        <form>
                            <label>Name: </label>
                            <input type="text" name="name" value={user.name} onChange={(e) => updateUserField(e)} />
                            <br />
                            <label>Email: </label>
                            <input type="text" name="email" value={user.email} onChange={(e) => updateUserField(e)} />
                            <br />
                            <label>Password: </label>
                            <input type="password" name="password" value={user.password} onChange={(e) => updateUserField(e)} />
                            <br />
                            <label>Phone: </label>
                            <input type="text" name="ext" value={user.ext} onChange={(e) => updateUserField(e)} />
                            <input type="text" name="phone" value={user.phone} onChange={(e) => updateUserField(e)} />
                            <br />
                            <label>Address: </label>
                            <input type="text" name="address" value={user.address} onChange={(e) => updateUserField(e)} />
                            <br />
                            <button onClick={handleUserSave}>Save</button>
                        </form>
                        :
                        <div>
                            <label>Name: </label>
                            <p>{user.name}</p>
                            <br />
                            <label>Email: </label>
                            <p>{user.email}</p>
                            <br />
                            <label>Password: </label>
                            <p type="password">{user.password}</p>
                            <br />
                            <label>Phone: </label>
                            <p>{user.ext} {user.phone}</p>
                            <br />
                            <label>Address: </label>
                            <p>{user.address}</p>
                            <br />
                            <button onClick={handleUserEdit}>Edit</button>
                        </div>
                }
            </div>
            <div id="petProfileCard">
                <h2>Pet Profile</h2>
                {
                    petEdit ?
                        <form>
                            <label>Name: </label>
                            <input type="text" name="name" value={pet.name} onChange={updatePetField} />
                            <br />
                            <label>breed: </label>
                            <input type="text" name="breed" value={pet.breed} onChange={updatePetField} />
                            <br />
                            <label>Age: </label>
                            <input type="text" name="age" value={pet.age} onChange={updatePetField} />
                            <br />
                            <label>Gender: </label>
                            <input type="text" name="gender" value={pet.gender} onChange={updatePetField} />
                            <br />
                            <label>Health issues: </label>
                            <input type="text" name="healthIssues" value={pet.healthIssues} onChange={updatePetField} />
                            <br />
                            <label>Dietary Restrictions: </label>
                            <input type="text" name="dietRestrictions" value={pet.dietRestrictions} onChange={updatePetField} />
                            <br />
                            <button onClick={handlePetSave}>Save</button>
                        </form>
                        :
                        <div>
                            <label>Name: </label>
                            <p>{pet.name}</p>
                            <br />
                            <label>Breed: </label>
                            <p>{pet.breed}</p>
                            <br />
                            <label>Age: </label>
                            <p>{pet.age}</p>
                            <br />
                            <label>Gender: </label>
                            <p>{pet.gender}</p>
                            <br />
                            <label>Health issues: </label>
                            <p>{pet.healthIssues}</p>
                            <br />
                            <label>Dietary Restrictions: </label>
                            <p>{pet.dietRestrictions}</p>
                            <br />
                            <button onClick={handlePetEdit}>Edit</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default Profile;