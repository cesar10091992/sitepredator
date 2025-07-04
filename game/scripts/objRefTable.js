const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Pin,
		C3.Behaviors.bound,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{Fixar: 0},
	{Animação: 0},
	{RestritoAoLayout: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{Jogador: 0},
	{Teclado: 0},
	{Senóide: 0},
	{Moeda: 0},
	{Âncora: 0},
	{Pontuação: 0},
	{Ação: 0},
	{Inimigo1: 0},
	{Marcador: 0},
	{Lava: 0},
	{TelaDeYouWin: 0},
	{TelaDeGameOver: 0},
	{Áudio: 0},
	{TelaDeInicio: 0},
	{Mouse: 0},
	{Botão: 0},
	{Marc: 0},
	{Pontos: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	Animação: class extends self.ISpriteInstance {},
	Jogador: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Moeda: class extends self.ISpriteInstance {},
	Pontuação: class extends self.ITextInstance {},
	Inimigo1: class extends self.ISpriteInstance {},
	Marcador: class extends self.ISpriteInstance {},
	Lava: class extends self.ISpriteInstance {},
	TelaDeYouWin: class extends self.ISpriteInstance {},
	TelaDeGameOver: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	TelaDeInicio: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Botão: class extends self.IButtonInstance {},
	Marc: class extends self.ISpriteInstance {}
}