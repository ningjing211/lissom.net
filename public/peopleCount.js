'use strict';
console.clear();

const config = {
	sparkFreq: 100,
	sparkLength: 50,
	burstCount: 4
};

const stage = new Stage({ container: document.body });


let sparkTick = 0;
const sparks = [];



stage.onTick = function tick({ simTime, simSpeed, width, height }) {
	sparkTick += simTime;
	while (sparkTick > 0) {
		sparkTick -= config.sparkFreq / (width / 1000);
		const z = Math.random();
		sparks.push({
			x: Math.random() * width,
			y: -50,
			z: z,
			iz: 1 - z,
			speedX: 0,
			speedY: 0.5,
			didBurst: false
		});
	}
	
	const minX = -config.sparkLength;
	const maxX = width + config.sparkLength;
	const maxY = height + config.sparkLength * 1.4;
	for (let i=sparks.length-1; i>=0; i--) {
		const spark = sparks[i];
		const speedMult = 3 * simSpeed * spark.z + 1;
		spark.x += spark.speedX * speedMult;
		spark.y += spark.speedY * speedMult;
		if (spark.x < minX || spark.x > maxX || spark.y > maxY) {
			sparks.splice(i, 1);
			continue;
		}
		
		// Air drag
		spark.speedX *= 0.99;
		// Gravity
		if (spark.speedY < 1) {
			spark.speedY += 0.02 * simSpeed;
			if (spark.speedY > 1) spark.speedY = 1;
		}
		
		if (!spark.didBurst && Math.random() < 0.001) {
			let angle = Math.random() * Math.PI;
			const angleInc = Math.PI * 2 / config.burstCount;
			spark.speedX = Math.sin(angle);
			spark.speedY = Math.cos(angle);
			spark.didBurst = true;
			for (let ii=1; ii<config.burstCount; ii++) {
				angle += angleInc;
				sparks.push({
					...spark,
					speedX: Math.sin(angle),
					speedY: Math.cos(angle)
				});
			}
		}
	}
};

stage.onDraw = function draw({ ctx, width, height }) {
	ctx.globalCompositeOperation = 'source-over';
	ctx.clearRect(0, 0, width, height);
	
	ctx.strokeStyle = '#f90';
	ctx.lineCap = 'round';
	
	sparks.forEach(s => {
		ctx.globalAlpha = s.z * 0.75 + 0.1;
		ctx.lineWidth = s.iz * 90 + 10;
		ctx.beginPath();
		ctx.moveTo(s.x, s.y);
		ctx.lineTo(
			s.x - s.speedX * config.sparkLength * s.iz,
			s.y - s.speedY * config.sparkLength * s.iz
		);
		ctx.stroke();
	});
};