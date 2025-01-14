# gimmickGetUserIdI

Gets the gimmick occupier **as int**.

## Code Information

- **Name**: `gimmickGetUserIdI`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 08 00`
- **Assembly Address in Memory** : `0x8941538`

## Parameters

- `(int *)gimmick_handle` *(8 bytes)* : Handle of the target gimmick.
- `(int)model_index` *(8 bytes)* : Model index in the gimmick handle.
- `(int *)destination` *(8 bytes)* : Variable to *store* the user ID.

## Example

Here is one example in hex:

```25 19 08 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
gimmickGetUserIdI((int *)iVar1, (int)0, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08941538(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 uVar5;
  
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
    uVar5 = FUN_088ce294(iVar4,*puVar2);
    *puVar3 = uVar5;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

