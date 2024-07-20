import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Route,
} from 'react-router-dom';
import { GAME_PATHS, ROOT_PATHS } from './enums/index.enum';
import PageNotFound from '@/components/notFound';
import MainMenuPageView from '@/pages/main-menu';
import RootLayout from '@/layout/rootLayout';
import HowToPlayPageView from '@/pages/about';
import CategoryPickPageView from '@/pages/category-pick';
import HangmanPageView from '@/pages/hangman';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={ROOT_PATHS.ROOT}
			element={<RootLayout />}
			errorElement={<PageNotFound />}
		>
			<Route path={ROOT_PATHS.GAME} element={<MainMenuPageView />} />
			<Route path={GAME_PATHS.HOW_TO_PLAY} element={<HowToPlayPageView />} />
			<Route
				path={GAME_PATHS.CATEGORY_PICK}
				element={<CategoryPickPageView />}
			/>
			<Route path={GAME_PATHS.HANGMAN} element={<HangmanPageView />} />

			<Route
				path={ROOT_PATHS.ROOT}
				element={<Navigate to={ROOT_PATHS.GAME} />}
			/>
		</Route>
	)
);
