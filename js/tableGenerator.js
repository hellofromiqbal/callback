const capitalized = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const generateTable = (data) => {
  console.log(data);
  const parentElement = document.getElementById("wrapper");

  const tableWrapper = document.createElement("table");
  tableWrapper.classList.add("table", "table-hover");

  const tHead = document.createElement("thead");
  const tRowHead = document.createElement("tr");
  const headNames = Object.keys(data[0]).filter(headName => headName !== 'website' && headName !== 'phone');
  headNames.forEach((headName) => {
    const tData = document.createElement("th");
    tData.innerHTML = capitalized(headName);
    tRowHead.append(tData);
  });
  tHead.append(tRowHead);

  tableWrapper.append(tHead);

  const tBody = document.createElement("tbody");
  data.forEach(user => {
    const tRowBody = document.createElement("tr");

    const tdID = document.createElement("td");
    tdID.innerHTML = user.id;
    const tdName = document.createElement("td");
    tdName.innerHTML = user.name;
    const tdUsername = document.createElement("td");
    tdUsername.innerHTML = user.username;
    const tdEmail = document.createElement("td");
    tdEmail.innerHTML = user.email;
    const tdAddress = document.createElement("td");
    tdAddress.innerHTML = `${user.address.street}, ${user.address.suite}, ${user.address.city}`;
    const tdCompany = document.createElement("td");
    tdCompany.innerHTML = `${user.company.name}`;

    tRowBody.append(tdID, tdName, tdUsername, tdEmail, tdAddress, tdCompany);
    tBody.append(tRowBody);
  });

  tableWrapper.append(tBody);

  parentElement.append(tableWrapper);
};

export default generateTable;