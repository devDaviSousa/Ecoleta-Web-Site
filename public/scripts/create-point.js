function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}
populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("[name=city]");
  const stateInput = document.querySelector("[name=state]");

  const ufValue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = "<option value>selecionar a cidade </option>";
  citySelect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }
      citySelect.disabled = false;
    });
}

document
  .querySelector("select[name= uf]")
  .addEventListener("change", getCities);

//Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}
const collectedItems = document.querySelector("input[items]");
let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;
  //adicionar ou remover uma classe com java script
  itemLi.classList.toggle("selected");

  const itemId = event.target.dataset.id;

  //verificar se existem itens selecionados, se sim pegar os intens selecionado
  const alreadySelected = selectedItems.findIndex((item) => {
    return item == itemId;
  });
  //se já estiver selecionado, tirar da seleção
  if (alreadySelected >= 0) {
    //tirar da seleção
    const filteredItem = selectedItems.filter((item) => {
      const itemIsDifferent = item != itemId;
      return itemIsDifferent;
    });
    selectedItems = filteredItem;
  } else {
    //se não estiver selecionado, adicionar a seleção
    //adicionar elemento
    selectedItems.push(itemId);
  }
  console.log(selectedItems);
  // atualizar o campo escondido com os itens selecionados
  collectedItems.value = selectedItems;
}
