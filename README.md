# NOTES

## Parcel
- **Dev Build**
- **Local Server**
- **HMR (Hot Module Replacement):** Exchanges, adds, or removes modules while an application is running, without a full reload.
- **File Watching Algorithm:** Written in C++
- **Caching:** Faster Builds
- **Image Optimization**
- **Minification of Files**
- **Bundling:** Bundles all files into one file
- **Compressing**
- **Consistent Hashing**
- **Code Splitting**
- **Differential Bundling:** Supports older browsers
- **Host on HTTPS**
- **Tree Shaking:** Removes Unused Code
- **Different dev and production bundles**
- **Chunking | Code Splitting | Lazy Loading | Dynamic Bundling | On Demand Loading:** Breaks down apps into smaller logical chunks

## FoodExplorer App
### Header
- Logo
- Nav Items

### Body
- Search
- Restaurant Container
  - Restaurant Card
    - Img
    - Name
    - Star Rating
    - Delivery Time
    - Cuisines

### Footer
- Copyright
- Links
- Address
- Contact

## React Hooks
- **useState()**
- **useEffect()**
- 

## Redux Toolkit
- Install `@reduxjs/toolkit` and `react-redux`
- Build the store
- Connect the store to the app
- Slice (`cartSlice`)
- `dispatch(action)`
- Selector

## Types of Testing (Developer)
- Unit Testing
- Integration Testing
- End to End Testing (e2e Testing)

## Setting up Testing in our App
- Install `React Testing Library`
- Install `Jest`
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default Babel Transpilation
- Jest Configuration: `npx jest --init`
- Install `jest-environment-jsdom`
- Install `@babel/preset-react` to make JSX work in test cases
- Include `@babel/preset-react` inside the Babel config
- Install `@testing-library/jest-dom`

---
.
