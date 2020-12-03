//Test DATA FOR USERS
let orgUsers = [
  {
    user_id: 55,
    first_name: "Jaiden",
    last_name: "Cantrell",
    email: "kingma@icloud.com",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 53,
    first_name: "Saul",
    last_name: "Holloway",
    email: "jonadab@icloud.com",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 45,
    first_name: "Jamari",
    last_name: "Kane",
    email: "shazow@live.com",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 103,
    first_name: "Emely",
    last_name: "Kelly",
    email: "ilial@gmail.com",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 20,
    first_name: "Talan",
    last_name: "Meza",
    email: "glenz@outlook.com",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 102,
    first_name: "Zoe",
    last_name: "Norton",
    email: "duchamp@gmail.com",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 54,
    first_name: "Xander",
    last_name: "Santiago",
    email: "mbswan@verizon.net",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 52,
    first_name: "Jimmy",
    last_name: "Steele",
    email: "andale@msn.com",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 2,
    first_name: "Suzy",
    last_name: "Test2",
    email: "test2@test.ca",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 87,
    first_name: "Melina",
    last_name: "Velazquez",
    email: "sisyphus@att.net",
    image: "./images/profile-hex.png"
  },
  {
    user_id: 56,
    first_name: "Anahi",
    last_name: "Walls",
    email: "mglee@hotmail.com",
    image: "./images/profile-hex.png"
  }
]

const createSiteElement = (siteObj) => {
  const { url, login_name, password } = siteObj;

  // creating structure of site container
  const card = $('<article class="sites">');
  const cardHeader = $('<header>');
  const cardFooter = $('<footer>');

  const updateIcons = $('<span class="edit-delete">');

  const editIcon = $('<i class="fas fa-edit"></i>');
  const deleteIcon = $('<i class="fas fa-trash-alt"></i>');

  updateIcons.append(editIcon);
  updateIcons.append(deleteIcon);

  const cardImage = $('<img src="http://placehold.jp/350x116.png">');

  cardHeader.append(updateIcons);
  cardHeader.append(cardImage);

  const cardDetail = $('<div class="card-details">');
  const cardTitle = $(`<span class="cardTitle">${url}</span>`);
  const cardAccName = $(`<span class="accountName">${login_name}</span>`);
  const cardPass = $(`<span class="pwd">${password}</span>`);

  cardDetail.append(cardTitle);
  cardDetail.append(cardAccName);
  cardDetail.append(cardPass);

  const cardAction = $('<div class="card-action">');
  const copyIcon = $('<span><i class="far fa-copy"></i></span>');

  cardAction.append(copyIcon);

  // append all footer content to footer
  cardFooter.append(cardDetail);
  cardFooter.append(cardAction);

  card.append(cardHeader);
  card.append(cardFooter);

  return card;
};

const createOrgElement = (siteObj) => {
  const { org_name, org_id } = siteObj;
  // creating structure of site container
  const container = $(`<section class="sites-container ${org_id}">`)
  const header = $(`<header class="org-site-head">`)

  const bar = $(`<div class="org-bar">`);
  const barEditForm = $('<div class="org-edit-form">');

  const barDetails = $('<div class="orgs-in-bar">');
  const barActions = $(' <div class="new-site">');

  //Div 1 (orgs-in-bar)
  const detailsSpan = $(`<span class="specific-org">${org_name}</span>`);

  const orgIcon = $('<i class="fas fa-user">');
  detailsSpan.prepend(orgIcon);

  // detailsSpan.append(orgName);

  //Div 2 (new-org)
  const addSpan = $(`<span name="${org_id}" class="add-site-button">`);
  const addBtn = $(`<a class="btn add" name="add_site" onclick="this.blur();" role="button">Add Site <i class="fas fa-plus"></i></a>`)
  addSpan.append(addBtn);

  const shareSpan = $(`<span name="${org_id}" class="share-org-button">`);
  const shareBtn = $(`<a class="btn share" name="share_org" onclick="this.blur();" role="button"> Share <i class="fas fa-plus"></i></a>`);
  shareSpan.append(shareBtn);

  //Build Divs
  barDetails.append(detailsSpan);
  barActions.append(addSpan);
  barActions.append(shareSpan);

  //Build Bar
  bar.append(barDetails);
  bar.append(barActions);

  barEditForm.append(`
    <div class="${org_id}-add-form" style="display: none;">
        <form id="formAddSite_${org_id}">
          <input  type="text" name="url" placeholder="Site URL">
          <input  type="email" name="account_email" placeholder="Associated Email">
          <input  type="text" name="login_name" placeholder="Login Name">
          <input  type="text" name="tags" placeholder="Tags">
          <div>
            <label for="lowerCase">Lower Case Letters</label>
            <input type="checkbox" checked="true" name="lowerCase" value="true">
            <label for="upperCase">Upper Case Letters</label>
            <input type="checkbox" checked="true" name="upperCase" value="true">
            <label for="digits">Numbers</label>
            <input type="checkbox" checked="true" name="numbers" value="true">
            <label for="symbols">Symbols</label>
            <input type="checkbox" checked="true" name="symbols" value="true">
            <input type="text" name="length" value="20">
          </div>
          <button type="submit" name="${org_id}" class="btn btn-primary addSiteBtn">Add Site</button>
        </form>
    </div>`);
    barEditForm.append(`<div class="${org_id}-share-form" style="display: none;">`);

  const footer = $(`<footer class="card-list" id="${org_id}">`);

  // create user table for every org
  const userTable = $(`<table class="table ${org_id}-table" style="display: none;">`);
  const tableHead = $(`
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
  `);
  const tableBody = $(`<tbody>`);

  userTable.append(tableHead);
  userTable.append(tableBody);



  tableBody.append(`
    <tr class="invite-user-row">
      <td>
      <i>Add new user to organization:</i>
      </td>
      <td>
        <form class="inline" id="formAddUser_${org_id}">
          <input id="emailInputTable" type="email" name="userEmail" placeholder="Email">
        </form>
      </td>
      <td>
          <button type="submit" name="${org_id}" class="btn btn-outline-success tableShareForm addUserBtn">Invite</button>
      </td>
    </tr>`);

  for (let user of orgUsers) {
    // console.log("URSER", user, `<td>${user['last_name']}, ${user.first_name}</td>`)
    let uName = $(`<td>${user.last_name}, ${user.first_name}</td>`)
    let uEmail = $(`<td>${user.email}</td>`)
    let uDelete = $(`
    <td>
    <form>
      <button type="delete" class="btn btn-outline-danger tableShareForm">Delete</button>
    </form>
    </td>
    `)

    const userRows = $(`<tr id="orgUsers_${org_id}" class="table">`);
    userRows.append(uName)
    userRows.append(uEmail)
    userRows.append(uDelete)
    tableBody.append(userRows);
  }


  barEditForm.append(userTable);

  header.prepend(bar);
  header.append(barEditForm);
  container.append(header);
  container.append(footer);

  return container;
}

const createAddSiteForm = () => {

};

