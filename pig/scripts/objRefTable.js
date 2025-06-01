const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{СледитьЗа: 0},
	{Игрок: 0},
	{Твёрдый: 0},
	{ТайловыйФон: 0},
	{Помидор: 0},
	{Клавиатура: 0}
];

self.InstanceType = {
	Игрок: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Помидор: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {}
}