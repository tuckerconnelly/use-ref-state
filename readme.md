# use-ref-state

Copied from https://ryankubik.com/blog/use-ref-state/

## Usage

```js
const ComponentWithEvent = () => {
  const [state, stateRef, setState] = useRefState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(stateRef.current);
    }, 100);
  }, []);

  setState(1);
};
```
