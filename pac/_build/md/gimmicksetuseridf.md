# gimmickSetUserIdF

Sets the gimmick occupier **as float**.

## Code Information

- **Name**: `gimmickSetUserIdF`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 07 00`
- **Assembly Address in Memory** : `0x89417f0`

## Parameters

- `(int *)gimmick_handle` *(8 bytes)* : Handle of the target gimmick.
- `(int)model_index` *(8 bytes)* : Model index in the gimmick handle.
- `(float)value` *(8 bytes)* : Value to set the user ID.

## Example

Here is one example in hex:

```25 19 07 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 03 00 00 00 / 10 00 00 00 / 00 00 80 3f```

Which is interpreted as:

```c
gimmickSetUserIdF((int *)iVar1, (int)3, (float)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089417f0(int param_1,undefined4 param_2)

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
    FUN_088ce2b4(*puVar3,iVar4,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

