const FilterAuthors = {
    render: (data) => {
        let resultAuthors;
        data = data.authors;
        console.log(888,data)
        resultAuthors += `<option value="default" selected>Выберите автора</option>`
              for (let i = 0; i < data.length; i++) {

            resultAuthors += `
             <option value="${data[i].name}"> ${data[i].name}</option>
            `
        }

        return `
       <h1><a href="/">Каталог</a></h1>
       <h3>Автор</h3>
       <select id="authors" name="select__author">
       
            ${resultAuthors},
       </select>
      `;
    }
}

export default FilterAuthors;
