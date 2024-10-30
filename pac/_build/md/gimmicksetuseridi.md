# gimmickSetUserIdI

Sets the gimmick occupier **as int**.

## Code Information

- **Name**: `gimmickSetUserIdI`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 09 00`
- **Assembly Address in Memory** : `0x8941620`

## Parameters

- `(int *)gimmick_handle` *(8 bytes)* : Handle of the target gimmick.
- `(int)model_index` *(8 bytes)* : Model index in the gimmick handle.
- `(int)value` *(8 bytes)* : Value to set the user ID.

## Example

Here is one example in hex:

```25 19 09 00 / 08 00 00 00 / 7f 00 00 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
gimmickSetUserIdI(((global)int *)giVar127, (int)2, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08941620(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
  }
  if (iVar4 != 0) {
    FUN_088ce274(iVar4,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

