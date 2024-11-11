# About Levels

There are three types of levels.

## Quest Level

Quest level (or Mission Level) is set with [setQuestLevelRevise](../setquestlevelrevise.md).

This affects to stat, so the higher the quest level is, the stronger the enemies are.

## Individual Level

Individual level value is set with [setLevel](../setlevel.md). (More precisely, it is generator level)

Offensive/Defensive level bonus calculation uses this (More information: ["Level bonus" of this article](https://rnielikki.github.io/pata/resources/damage.html)).


## Final level

```
Final_Level = Quest_Level + Individual_Level - 1
```

If quest level and/or individual level is not defined, it uses level from [setQuestLevel](../setquestlevel.md).

This **is used for stat calculation** (Wiht the "level incremental" values in `originstatparam`).

### Stat scale

- Stamina: `(base_stat) + level_inc * lvl * (lvl+1) * 0.5`
- Damage: `dmg + dmg_inc * (level * 0.9 + (level * (level + 1) * 0.0225)`
- Others: Linear