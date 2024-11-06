# getUnitCtrlCurrentActType

Gets what the unit is currently doing.

## Code Information

- **Name**: `getUnitCtrlCurrentActType`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 2c 00`
- **Assembly Address in Memory** : `0x8b5e7d0`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int *)command_id` *(8 bytes)* : Variable to *store* the [Command ID](./guide/reference-table.md#command-ids) performing now. **For PvE enemy, the action is limited to march/defend/attack** or nothing (-1).

## Example

Here is one example in hex:

```25 1f 2c 00 / 04 00 00 00 / 2b 00 00 00 / 04 00 00 00 / 2a 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getUnitCtrlCurrentActType((int *)iVar43, (int *)iVar42, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5e7d0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar3 = 0xffffffff;
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (*piVar1 == -1) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8), *piVar1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    uVar5 = FUN_Mission__08b57630(iVar4,*puVar2);
    *puVar3 = uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

