# getDisablePercussionView

Gets if the drum hit icon visualising is [enabled or disbaled](./setdisablepercussionview.md). **Works only when drum view is enabled in system setting**.

## Code Information

- **Name**: `getDisablePercussionView`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 1d 00`
- **Assembly Address in Memory** : `0x8971140`

## Parameters

- `(int)drum_id` *(8 bytes)* : [Drum ID](./guide/reference-table.md#drum-ids) to check if the visualising is enabled or disabled. 0 checks if every drum visualising is disabled.
- `(int *)disabled` *(8 bytes)* : Variable to *store* if the drum hit is visualised or not. **Stores 1 if visualising is disabled**, otherwise saves 0.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08971140(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  iVar4 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar4 != 0) {
    uVar3 = func_0x08b5f738(iVar4,*puVar1);
    *puVar2 = uVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

