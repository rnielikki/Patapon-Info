# playAtrac

Starts playing Atrac (music) file. The music files are sgd that **does not** start with `ptp_`.

## Code Information

- **Name**: `playAtrac`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0b 02 00`
- **Assembly Address in Memory** : `0x896f7fc`

## Parameters

- `(int)atrac_id` *(8 bytes)* : ID of the Atrac.
- `(float)delay` *(8 bytes)* : Delay before playing the Atrac, as seconds.
- `(float)volume` *(8 bytes)*: The music volume, 1 is 100%.
- `(float)pan_left` *(8 bytes)*: The pan left volume, keep 0 for normal volume.
- `(float_)pan_right` *(8 bytes)*: The pan right volume, keep 0 for normal volume.
- `(float)speed` *(8 bytes)*: The music speed (with pitch change).

About Atrac ID, first 4 byte (for example, `0x5070` in `0x507000f8` is related to  `selist.spm`).

Last 3 bytes (in the example above, `0x0f8`) are the real Atrac ID. The ID must be less than 300 (`< 0x12C`).

When pausing/disaling sound with [stop](./stop.md) or [cancel](./cancel.md), use same `atrac_id` as the one that used in `playAtrac`.

## Example

Here is one example in hex:

```25 0b 02 00 / 04 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 3f / 10 00 00 00 / cd cc 4c 3e / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
playAtrac((int *)iVar0, (float)0.5, (float)0.2, (float)0, (float)0, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896f7fc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  Sound::PlayMusic(*puVar2,*puVar3,*puVar4,*puVar5,0,*puVar6,0,*(int *)(param_1 + 0x14) + 0x60,
                   *puVar1,1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
