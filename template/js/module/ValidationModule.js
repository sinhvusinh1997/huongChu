import { popupValidate } from "./PopupModule.js";

function isFill(value) {
	return value !== "";
}

function isEmail(value) {
	const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return value.match(regex);
}

function isNum(value) {
	const regex = /^[0-9]+$/;

	return value.match(regex);
}

function showResult(elm1, value, elm2, className) {
	elm1.innerHTML = value;
	elm2.classList.add(className);
}

function textValidate(group, objData) {
	const inputField = group.querySelector(".form-input");
	const msg = group.querySelector(".form-msg");
	const label = group.querySelector(".form-label");
	const typeInput = inputField.dataset.form;

	inputField.addEventListener("blur", function () {
		const value = this.value;
		msg.classList.add("active");

		if (!isFill(value)) {
			showResult(msg, "MUST NOT empty!", group, "incorrect");
			objData[typeInput] = null;
			return;
		}

		switch (typeInput) {
			case "name":
				showResult(msg, "Validate!", group, "correct");
				objData[typeInput] = value;
				break;
			case "email":
				const msgChoose = isEmail(value) ? "Validate!" : "MUST email format!";
				const className = isEmail(value) ? "correct" : "incorrect";

				showResult(msg, msgChoose, group, className);
				objData[typeInput] = isEmail(value) ? value : null;
				break;
			case "num":
				if (isNum(value)) {
					const msgChoose = (value.length >= 9) ? "Validate!" : "At least 9 number!";
					const className = (value.length >= 9) ? "correct" : "incorrect";

					showResult(msg, msgChoose, group, className);
					objData[typeInput] = (value.length >= 9) ? value : null;
				} else {
					showResult(msg, "MUST number format!", group, "incorrect");
					objData[typeInput] = null;
				}
				break;
			default:
				break;
		}
	});

	inputField.addEventListener("keydown", () => {
		group.classList.remove("incorrect");
		group.classList.remove("correct");
		msg.classList.remove("active");
	})

}

function checkboxValidate(group, objData) {
	const input = group.querySelector("input");
	objData.checkbox = false;

	group.addEventListener("click", e => {
		objData.checkbox = input.checked;
	});
}

export default function ValidationModule(idForm) {
	const targetForm = document.querySelector(idForm);
	const objData = {};

	if (targetForm) {
		const getFormGroup = targetForm.querySelectorAll(".form-group");
		const getTextInput = [...getFormGroup].filter(item => item.classList.contains("text"));
		const getCheckBoxInput = [...getFormGroup].filter(item => item.classList.contains("checkbox"));
		const getButton = targetForm.querySelector("Button");
		
	
		if (getTextInput.length > 0) {
			getTextInput.forEach(group => {
				textValidate(group, objData);
			});
		}
	
		if (getCheckBoxInput.length > 0) {
			getCheckBoxInput.forEach(group => {
				checkboxValidate(group, objData);
			});
		}
	
		if (getButton) {
			getButton.addEventListener("click", e => {
				e.preventDefault()
				let rs = true;
		
				if ((Object.keys(objData).length == 0)) {
					rs = false;
				}
		
				for (const key in objData) {
					if (!objData[key]) {
						rs = false;
						break;
					}
				}
				popupValidate(rs);
			})
		}
	}
}