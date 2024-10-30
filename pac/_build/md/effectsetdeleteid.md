# effectsetDeleteId

Gives an unique ID to [delete](./effectkill.md) a specific effect.

## Code Information

- **Name**: `effectsetDeleteId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 11 00`
- **Assembly Address in Memory** : `0x8941fbc`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle of the effect, possibly from [addEffect](./addeffect.md)
- `(int)kill_id` *(8 bytes)* : Unique ID to set [for deleting](./effectkill.md).

## Example

Here is one example in hex:

```25 19 11 00 / 08 00 00 00 / ca 00 00 00 / 08 00 00 00 / ca 00 00 00```

Which is interpreted as:

```c
effectsetDeleteId(((global)int *)giVar202, ((global)int *)giVar202)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08941fbc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3);
  }
  if (iVar3 != 0) {
    *(undefined4 *)(iVar3 + 0x2d0) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

