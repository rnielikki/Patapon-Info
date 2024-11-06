# playSeFromPos

Starts playing Se (sound effect) from specific pan (position). The sound files are sgd that **does** start with `ptp_`.

## Code Information

- **Name**: `playSeFromPos`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0b 08 00`
- **Assembly Address in Memory** : `0x896fc18`

## Parameters

- `(float)pos` *(8 bytes)* : X Position to set the sound effect pan. Might be PSP screen pixels, please tell if it is screen or world position.
- `(int)enable_pos_listen` *(8 bytes)* : If this is not zero, `pan` becomes zero and `volume_multiplier` becomes one, ignoring those two parameters.
- `(int)se_id` *(8 bytes)* : [ID](./guide/reference-table.md#musicsound-list-for-playatrac-etc) of the Sound effect.
- `(float)delay` *(8 bytes)* : Delay before playing the sound, as seconds.
- `(float)volume_multiplier` *(8 bytes)*: Tell more about this, if you found something. Until then keep this to 1.
- `(float)volume` *(8 bytes)*
- `(float)pan` *(8 bytes)*: -1 is whole left, +1 is whole right. The value will be clamped to -1 ~ 1.
- `(float)speed` *(8 bytes)* : The sound speed (with pitch change).

About Sound ID, first 4 byte (for example, `0x5070` in `0x507000f8` is related to  `selist.spm`).

Last 3 bytes (in the example above, `0x0f8`) are the real Sound ID. The ID must be less than 300 (`< 0x12C`).

When pausing/disaling sound with [stop](./stop.md) or [cancel](./cancel.md), use same `se_id` as the one that used in `playSe`.

## Example

Here is one example in hex:

```25 0b 08 00 / 20 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 11 0c 30 08 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / cd cc 4c 3f```

Which is interpreted as:

```c
playSeFromPos((float *)fVar0, (int)1, (int)137366545, (float)0, (float)1, (float)0, (float)0, (float)0.8)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896fc18(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int *piVar3;
  undefined4 *puVar4;
  float *pfVar5;
  undefined4 *puVar6;
  float *pfVar7;
  undefined4 *puVar8;
  int iVar9;
  float fVar10;
  undefined4 uVar11;
  float local_8;
  float local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  pfVar5 = (float *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  pfVar7 = (float *)Pac_Get_Param(param_2,6,1,4);
  puVar8 = (undefined4 *)Pac_Get_Param(param_2,7,1,4);
  iVar9 = FUN_088e726c(*(undefined4 *)(param_1 + 0x14),*piVar3,0xfffffffe);
  if (iVar9 == 0) {
    if (*piVar2 != 0) {
      local_8 = 0.0;
      local_4 = 1.0;
      iVar9 = *piVar3;
      goto LAB_0896fdb8;
    }
    uVar11 = *puVar1;
  }
  else {
    uVar11 = *puVar1;
  }
  FUN_088e7114(uVar11,*(undefined4 *)(param_1 + 0x14),&local_4,&local_8);
  local_4 = local_4 * *pfVar5;
  fVar10 = local_8 + *pfVar7;
  if (1.0 < fVar10) {
    local_8 = 1.0;
  }
  else {
    local_8 = -1.0;
    if (-1.0 <= fVar10) {
      local_8 = fVar10;
    }
  }
  iVar9 = *piVar3;
LAB_0896fdb8:
  if (iVar9 == 0x401000c4) {
    Sound::Play_Sound(*puVar4,local_4,*puVar6,local_8,0x3fb33333,*puVar8,0,
                      *(int *)(param_1 + 0x14) + 0x60, *puVar3);
  }
  else {
    Sound::Play_Sound(*puVar4,local_4,*puVar6,local_8,0,*puVar8,0,*(int *)(param_1 + 0x14) + 0x60, *puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

