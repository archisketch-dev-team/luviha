function showLoading() {
  var loadingContainer = document.getElementById('Loading')
  loadingContainer.style.display = 'flex'
}

function hideLoading() {
  var loadingContainer = document.getElementById('Loading')
  loadingContainer.style.display = 'none'
}

function checkLoading() {
  console.log('sss')

  var removeLoadingElement = document.getElementById('removeLoading')
  if (document.readyState === 'complete' && document.styleSheets.length > 0) {
    removeLoadingElement.style.display = 'block'
  } else {
    removeLoadingElement.style.display = 'none'
  }
}

var isLoading = false

function navigateTo(targetPage) {
  showLoading()
  isLoading = true

  setTimeout(function () {
    window.location.href = targetPage
  }, 2000)
}

document.addEventListener('DOMContentLoaded', function () {
  var menuItemsNav = document.querySelectorAll('#transfer_page')

  menuItemsNav.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      event.preventDefault()

      if (!isLoading) {
        var targetPage = this.getAttribute('href')
        navigateTo(targetPage)
      }
    })
  })

  window.addEventListener('load', function () {
    if (isLoading) {
      hideLoading()
      isLoading = false
    }
  })

  window.addEventListener('load', checkLoading)
})
