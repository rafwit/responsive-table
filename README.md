## Responsive Table task

This task was done as part of recruitment journey with Seller.Tools.

### Getting started

This app serves products from [this API](https://github.com/seller-tools/products-api). You need it running locally to be able to use this app fully.

After that:

1. Clone this repository

```
$ git clone https://github.com/rafwit/responsive-table
```

2. Navigate to its root folder and run

```
ng serve -o
```

### Work done

I created responsive table that serves the data from [this API](https://github.com/seller-tools/products-api).

#### 🧠 **Decisions**

- Desktop first, `1rem` = `10px`;
- Breakpoints:
  - 1200px,
  - 900px,
  - 800px,
  - 600px,
  - 500px
- Pagination: 50 items as in spec; it gives option to moves forward or back by one page.
- I used external style dependency [ngx-bar-rating](https://www.npmjs.com/package/ngx-bar-rating) to style ratings. I decided that it is fairly reliable for this project, even tough it has 19 issues raised (in 4 years timeline). It has over 4000 weekly and has been recently updated.

#### **Things that could be improved 📈**

1. Add more tests.
2. Add ability to switch between custom pages, not just by one.
3. Develop cache mechanism ♻︎ for already fetched products.

**Thanks and I'll appreciate the feedback 💡**
