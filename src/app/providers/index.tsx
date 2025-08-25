import compose from "compose-function";

import { withMantine } from "./with-mantine";
import { withAccessibility } from "./with-accessibility-hoc";

const withImageLoader = (Component: React.FC) => (props: any) => <Component {...props} />;

export const withProviders = compose(withMantine, withAccessibility, withImageLoader);
