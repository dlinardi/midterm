$(document).ready(function () {
  console.log("DOC READY")

  loadRenderAll();//Takes UserID
  // ==================================
  // loadAllSites(renderOrgWSites);


  $('#search-vault').on('input', function () {
    const userInput = $(this).val();
    if (userInput) {
      $('.sites-container').remove();
      search(userInput);
    } else {
      $('.sites-container').remove();
      // loadAllSites(renderOrgWSites);
      loadRenderAll()
    }
  })

  $(document).on('click', '.card-action', function (event) {
    // Targets .pwd Class of the Clicked urlInfo, will clip innerText
    const toClip = $(this).parent().find('.pwd')[0].innerText
    copyToClipboard(toClip)
  });

  $(document).on('click', '.addSiteBtn', function (event) {
    event.preventDefault();
    const org_id = $(this)[0].name
    console.log(org_id)
    // POST FORM
    $.ajax({
      method: 'POST',
      url: `/api/orgs/${org_id}/addSite`,
      data: $(`#formAddSite_${org_id}`).serialize()
    })
      // .then(loadOrgSites(org_id,renderOrgSites))
      .then($(`.site-tiles.${org_id}`).remove())
      .then(loadRenderOrg(org_id))
    //=======^^^^^^^^^^^^^^^^^^^^^^^================== NEED to render Only org rather than whole container
  });

  $(document).on('click', '.addUserBtn', function (event) {
    event.preventDefault();
    const org_id = $(this)[0].name
    // POST FORM
    $.ajax({
      method: 'POST',
      url: `/api/orgs/${org_id}/addUser`,
      data: $(`#formAddUser_${org_id}`).serialize()
    })
      .then(window.alert('User Added to Org?'))
  });

  $(document).on('click', '.addOrgBtn', function (event) {
    event.preventDefault();
    // POST FORM
    $.ajax({
      method: 'POST',
      url: `/api/orgs/new`,
      data: $(`#formAddOrg`).serialize()
    })
      .then(loadRenderAll())
      //=======^^^^^^^^^^^^^^^^^^^^^^^================== NEED to render Only org rather than whole container
  });

  // show add site form / show share org form
  // WORK IN PROGRESS >>>>>>>

  $(document).on('click', '.add-site-button', function (e) {
    e.preventDefault();
    const org_id = $(this)[0].id;
    console.log(org_id);
    const formContainer = $(`.contain_${org_id}`);
    formContainer.slideToggle();
  });

  $(document).on('click', '.share-org-button', function (e) {
    e.preventDefault();
    const org_id = $(this)[0].id;
    console.log(org_id);
    const formContainer = $(`.contain_${org_id}`);
    formContainer.slideToggle();
  });




});
