# setLinkById

Connects a model to a node **by ID**.

## Code Information

- **Name**: `setLinkById`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 65 00`
- **Assembly Address in Memory** : `0x8912760`

## Parameters

- `(int *)parent_handle` *(8 bytes)* : The parent [handle](./guide/how-to-get-a-handle.md) to contain the child handle.
- `(int *)child_handle` *(8 bytes)* : Handle of the model, e.g. effect, from [addEffect](./addeffect.md).
- `(int)node_id` : The node ID from the GXX file.

## Example

Here is one example in hex:

```25 17 65 00 / 04 00 00 00 / 15 00 00 00 / 08 00 00 00 / 7b 01 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setLinkById((int *)iVar21, ((global)int *)giVar379, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08912760(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  if (iVar4 != 0) {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar2,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (iVar5 != 0) {
      Gimmick::Gimmick_Set_Position(iVar5,iVar4,*puVar3,0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

