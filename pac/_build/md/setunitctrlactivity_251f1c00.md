# setUnitCtrlActivity (251f1c00)

> *Other functions have the same name. Check the [Disambiguation page](./setUnitCtrlActivity.md) to find them.*

Sets squad action to a unit. This defines animation only.

Unit attack works with [actual action type](./setunitctrlcurrentacttype_251f2700.md).

## Code Information

- **Name**: `setUnitCtrlActivity`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 1c 00`
- **Assembly Address in Memory** : `0x8b5dc78`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int)command_id` *(8 bytes)* : [Command ID](./guide/reference-table.md#command-ids) of it, but **range of 0~2 (march, defend, attack)** or nothing (-1).
- `(int)sqaudactivity_id` *(8 bytes)* : ID from `squadActivityParam`.

> [!WARNING]
> The AI dark heroes squadactivityparam ID is different from player dark heroes. Check [SquadActivityParam ID table](./guide/reference-table.md#squadactivityparam-ids-pve-only) to assign the proper ID.

## Example

Here is one example in hex:

```25 1f 1c 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / d4 05 00 00```

Which is interpreted as:

```c
setUnitCtrlActivity(((global)int *)giVar26, (int)2, (int)0, (int)1492)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5dc78(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(param_1 + 0x10);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  else if (*piVar1 == -1) {
    iVar5 = 0;
  }
  else {
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    iVar5 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar5 + 0x2c8), *piVar1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    FUN_Mission__08b57328(iVar5,*puVar2,*puVar3,*puVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

