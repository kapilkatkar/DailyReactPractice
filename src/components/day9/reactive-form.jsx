import { useState } from "react";

const ReactiveForm = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [heightFt, setHeightFt] = useState(5);
  const [heightInc, setHeightInc] = useState(0);
  const [weightLbs, setWeightLbs] = useState(0);
  //const [selectedCheckBox, setselectedCheckBox] = useState([]);
  const [selectedActivityLevel, setSelectedActivityLevel] = useState("");
  const [selectedDiabetes, setSelectedDiabetes] = useState("");
  const [pregnency, setPregnency] = useState("");
  return (
    <div>
      <div>
        <label htmlFor="genders">YOUR GENDER</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              id="gender"
              onChange={() => setSelectedGender("Male")}
            />
            Male
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              id="gender"
              onChange={() => setSelectedGender("Female")}
            />
            Female
          </label>
        </div>
        <div>Selectd Gender : {selectedGender}</div>
      </div>
      <hr />
      <div>
        <label htmlFor="height">HEIGHT AND WEIGHT</label>
        <div>
          <label>
            <input
              type="number"
              value={heightFt}
              onChange={(e) => {
                setHeightFt(e.target.value);
              }}
            />
            Ft.
          </label>
        </div>
        <div>
          <label>
            <input
              type="number"
              value={heightInc}
              onChange={(e) => {
                setHeightInc(e.target.value);
              }}
            />
            in.
          </label>
        </div>
        <div>
          <label>
            <input
              type="number"
              value={weightLbs}
              onChange={(e) => {
                setWeightLbs(e.target.value);
              }}
            />
            lbs.
          </label>
        </div>
        <div>
          Height and Weight : {heightFt}, {heightInc}, {weightLbs}
        </div>
      </div>
      <hr />
      <div>
        <label htmlFor="FamilyHistory">FAMILY HISTORY</label>
        <div>
          <div>
            <div>
              <strong>Anyone in your family have prediabetes?</strong>
            </div>
            <div>
              check all that apply, and if you would not say, thats okay.
            </div>
          </div>
          <label htmlFor="parents">
            <input type="checkbox" name="Parents" id="Parents" />
            Parents
          </label>
        </div>
        <div>
          <label htmlFor="Siblings">
            <input type="checkbox" name="Siblings" id="Siblings" />
            Siblings
          </label>
        </div>
        <div>Selected Checkbox :</div>
      </div>
      <hr />
      <div>
        <label htmlFor="activity">ACTIVITY LEVEL</label>
        <div>
          <strong>How active are you on a weekly basis?</strong>
          <div>
            <label htmlFor="notVeryActive">
              <input
                type="radio"
                name="activityLevel"
                id="notVeryActive"
                onChange={() => setSelectedActivityLevel("Not Very Active")}
              />
              Not Very Active
              <div>less than 60 minutes of physical activity per week</div>
            </label>
          </div>
          <div>
            <label htmlFor="notVeryActive">
              <input
                type="radio"
                name="activityLevel"
                id="active"
                onChange={() => setSelectedActivityLevel("Active")}
              />
              Active
              <div>60+ minutes physical activity per week</div>
            </label>
            <div>Activity level : {selectedActivityLevel}</div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <label>DIABETES</label>
        <div>
          <div>
            <strong>Have you been diagnosed with diabetes before?</strong>
          </div>
          <div>
            <label>
              <input
                type="Radio"
                name="diabetis"
                id="diabetis"
                onChange={() => setSelectedDiabetes("Pre-diabetes")}
              />
              Pre-diabetes
            </label>
          </div>
          <div>
            <label>
              <input
                type="Radio"
                name="diabetis"
                id="diabetis"
                onChange={() => setSelectedDiabetes("type-2")}
              />
              type-2
            </label>
          </div>
          <div>
            <label>
              <input
                type="Radio"
                name="diabetis"
                id="diabetis"
                onChange={() => setSelectedDiabetes("neither")}
              />
              neither
            </label>
          </div>
          <div>diabetes type : {selectedDiabetes}</div>
        </div>
      </div>
      <hr />
      <div>
        <label htmlFor="pregnency">PREGNANCY</label>
        <div>
          <strong>Are you currently pregnent?</strong>
        </div>
        <div>we need to add some friendly help text here.</div>
        <div>
          <label htmlFor="pregnent">
            <input
              type="radio"
              name="pregnent"
              id="pregnent"
              onChange={() => setPregnency("Pregnent")}
            />
            Pregnent
            <div>or have given birth within last 6 weeks.</div>
          </label>
        </div>
        <div>
          <label htmlFor="pregnent">
            <input
              type="radio"
              name="pregnent"
              id="pregnent"
              onChange={() => setPregnency("Not Pregnent")}
            />
            Not Pregnent
            <div>and have not given birth within last 6 weeks.</div>
          </label>
          <div>Pregnency : {pregnency}</div>
        </div>
      </div>
    </div>
  );
};

export default ReactiveForm;
