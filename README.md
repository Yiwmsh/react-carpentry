Hi! This is a library I wrote primarily or personal use, to serve as a sort of toolkit for my React projects. I think of this as my carpentry shop, so at times it may take on a sort of functional, organized messiness, largely owing to experimentation.

# Theme Tokens

I use a Theme object to provide default styles to all of my components. When you use my components, you should construct a Theme object with a Pallete. A Pallete requires, minimally, a background color, text color, alt-text color, and 'primary' color which will be used as an accent.

```typescript
const theme: Theme = {
  palette: {
    background: `#FFFFFF`,
    text: `rgba(0, 0, 0, 1)`,
    altText: `#FFFFFF`,
    primary: "rgb(150, 60, 50)",
  },
};
```

## ThemeContext

ThemeContext is a top-level wrapping class that injects your Theme variables as CSS variables on the page. Simply create a ThemeContext and pass in your theme.

```jsx
<ThemeContext theme={theme}>{...html}</ThemeContext>
```

# Components

## Containers

### ScreenFrame

A ScreenFrame is intended to be a second-from-top level container that serves the purpose of bounding the ScreenFrame's content to the viewport's width and setting the background color as intended. On themes with a white background color this component's impact may not be noticable, but this is how my library achieves dark-mode functionality.

### PageBody

The PageBody is the body of your site. It provides some margin on either side, and is a column-flex. Its purpose is to create a little white-space to either side of your content, and frame everything nicely.

### Card

A Card, at its most basic level, is a container with rounded borders, a box shadow, some margine, and `overflow: hidden`. Cards optionally provide the ability to center themselves in their parent, or define `width`, `height`, `maxWidth`, and `maxHeight`.

This is a basic Card.

```jsx
<ThemeContext theme={theme}>
  <Card>
    This is a card. Cards should be the same color as the background, should
    fill their containers, and should have a subtle drop shadow to distinguish
    their borders. Cards should be display: flex and flex-direction: column.
    Cards should hide overflow.
  </Card>
</ThemeContext>
```

And this is a slightly more styled Card:

```jsx
<ThemeContext theme={theme}>
  <Card height="30%" width="30%" centered="both">
    This card should be 30% of its container's dimensions. It should also be
    centered.
  </Card>
</ThemeContext>
```

### Modal

A Modal is a container with `position: fixed` that fills the entire screen and starts with `display: none`. By default it will have a translucent black background, to dim the rest of the screen. Modals are intended to be used as popups, and can be opened or closed. By default a Modal will contain nothing else, but accepts children.

```jsx
<ThemeContext theme={theme}>
  <Button onPress={() => setShowModal(!showModal)}>Show Modal</Button>
  <Modal dimmed={dimmed} show={showModal}>
    <Card centered="both" width="20%" height="20%">
      <CardBody centerContents>
        <TextContent>This is a card inside a modal! Wow!</TextContent>
      </CardBody>
      <CardFooter>
        <ButtonBank>
          <Button onPress={() => setShowModal(!showModal)}>Hide Modal</Button>
          <Button onPress={() => setDimmed(!dimmed)}>Dimmed?</Button>
        </ButtonBank>
      </CardFooter>
    </Card>
  </Modal>
</ThemeContext>
```

### Navbar

The navbar is a horizontal-flex container with `height: 100vw` that uses your Primary color as its background. By default its position is `sticky`, but it can be made `fixed` with `position="fixed"`.

I really enjoy `position: sticky`, here is an example of what is possible with it:

![SiteDemo](https://user-images.githubusercontent.com/110123778/194678689-34b0ad04-9724-4aab-b507-40e9aa88ad74.gif)

### ButtonBank

A ButtonBank is a row-flex container with a slight gap, intended to contain one or more buttons.

## Displays

### TextContent

Text content is a simple wrapping div for any text elements such as `<Title>` or `<p>` that injects your Theme's text color into any text within it. You can tell it to use your alternate text color instead with `altColor`, or you can manually set the text color you want to use with `color={SemanticColors.color}`

### Title

Title is a bigger `h1` that can be made `sticky` with a property.

! This stickiness is a work in progress, it does not currently do what I intend for it to do, and may be removed.

## Inputs

### Button

This is a styled button which leverages `react-aria` for accessibility features.

### ScrollToButton

This button takes a `target` prop, which can be either a Number or a Ref to another HTML element, and then, when clicked, attempts to scroll either that y-index or provided element into view.

```jsx
<ThemeContext theme={darkTheme}>
  <Navbar>
    <ScrollToButton target={0}>Scroll to Top</ScrollToButton>
    <p>
      This text should leave space for the scroll button even if it isn't
      visible.
    </p>
  </Navbar>
</ThemeContext>
```

#### ScrollToTopButton

This is a pre-baked `ScrollToButton` that handles its own styling and functionality. As a result its implimentation is as simple as adding `<ScrollToTopButton/>` anywhere in your hierarchy.

Example:

```jsx
<ThemeContext theme={darkTheme}>
  <ScrollToTopButton />
  <ScreenFrame>
    <PageBody>
      <TextContent>This is the top of the page!</TextContent>
      <PageSplashSimulator />
      <PageSplashSimulator />
      <PageSplashSimulator />
      <PageSplashSimulator />
    </PageBody>
  </ScreenFrame>
</ThemeContext>
```
![ScrollToTopButton](https://user-images.githubusercontent.com/110123778/195233320-e8116395-06a9-4ce2-92ca-8940e07ea40f.gif)

### Checkbox

A custom Checkbox component animated with `Framer Motion` and leveraging `react-aria` for accessibility. It will use your Theme's colors.

![Checkbox](https://user-images.githubusercontent.com/110123778/194994171-d55a2e60-76de-475f-b50b-2274a8e17be9.gif)

Implimentation:

```jsx
<ThemeContext theme={lightTheme}>
  <Checkbox>This is a test checkbox!</Checkbox>
</ThemeContext>
```
