/**
 * @description a component that utilizes the History API and React state
 */
const HistoryStateSyncComponent = () => {
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("md");

  useEffect(() => {
    window.history.pushState(null, "", `?color=${color}&size=${size}`);
  }, [color, size]);

  return (
    <div>
      <button type="button" onClick={() => setColor("blue")}></button>
    </div>
  );
};

/**
 * @description use useRouter in next js client component
 */
const NextJSClientComponentWithUseRouter = () => {
  const router = useRouter();
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("md");

  useEffect(() => {
    router.push(`?color=${color}&size=${size}`, {
      scroll: false,
    });
  }, [color, size]);

  return (
    <div>
      <button type="button" onClick={() => setColor("blue")}></button>
    </div>
  );
};

/**
 * @description use useSearchParams in next js client component
 */
const NextJSClientComponentWithUseSearchParams = () => {
  const searchParams = useSearchParams();
  const color = searchParams.get("color");
  const size = searchParams.get("size");

  return (
    <div>
      <button type="button">
        <Link href={`?color=${color}&size=${size}`} />
      </button>
    </div>
  );
};

/**
 *
 * @description use searchParams in next js server component
 */
const NextJSServerComponentWithSearchParams = ({ searchParams }) => {
  const color = searchParams.color || "red";
  const size = searchParams.size || "md";
  return (
    <div>
      <button type="button">
        <Link
          href={`?${new URLSearchParams({
            color,
            size,
          })}`}
        />
      </button>
    </div>
  );
};

export {
  HistoryStateSyncComponent,
  NextJSClientComponentWithUseRouter,
  NextJSClientComponentWithUseSearchParams,
  NextJSServerComponentWithSearchParams,
};
