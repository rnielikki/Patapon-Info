# getRenderPriority

Gets how top the object is. Higher value means the target is more top of the screen.

## Code Information

- **Name**: `getRenderPriority`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 70 00`
- **Assembly Address in Memory** : `0x8918bb8`

## Parameters

- `(int *)handle_id` *(8 bytes)* : [Handle](./guide/category.md#getting-handle) to set render priority.
- `(int *)destination` *(8 bytes)* : Destination to save the render priority.

For reference, fever gauge render priority is `10000` (`0x2710`).

## Example

Here is one example in hex:

```25 17 70 00 / 04 00 00 00 / 00 00 00 00 / 08 00 00 00 / a9 01 00 00```

Which is interpreted as:

```c
getRenderPriority((int *)iVar0, ((global)int *)giVar425)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08918bb8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  undefined4 uVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  if (iVar3 != 0) {
    uVar4 = (**(code **)(*(int *)(iVar3 + 0x3c) + 0x10))(iVar3 + 0x20);
    *puVar2 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

