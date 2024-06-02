import '../styles/style.scss';
import React, { memo, useRef } from 'react';
import Labyrinth from './Labyrinth';
import Tree from './Tree';
import Tower from './Tower';

const GamePage = () => {
	return (
		<>
			{/* <Menu scrollToRef={scrollToRef} blocks={blocks} /> */}
			<main className="page-content game-page">
				<div className="container-full">
					<div className="row">
						<div className="col l-5 l-order-1">
							<Labyrinth type="purple" />
						</div>
						<div className="col l-2 l-order-2">
							<Tree />
						</div>
						<div className="col l-5 l-order-3">
							<Labyrinth type="red" />
						</div>
						<div className="col l-3 l-order-4">
							<Tree />
						</div>
						<div className="col l-5 l-order-7">
							<Labyrinth type="gold" />
						</div>
						<div className="col l-2 l-order-8">
							<Tree />
						</div>
						<div className="col l-5 l-order-9">
							<Labyrinth type="blue" />
						</div>
						<div className="col l-3 l-order-6">
							<Tree />
						</div>
						<div className="col l-6 l-order-5">
							<Tower />
						</div>
					</div>
				</div>
			</main>
			{/* <Footer scrollToRef={scrollToRef} blocks={blocks} /> */}
			{/* <GameRequestModal /> */}
		</>
	);
};

export default memo(GamePage);
