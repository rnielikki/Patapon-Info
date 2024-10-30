# wakeUpForce

Forcefully activates the enemy move (wake up).

## Code Information

- **Name**: `wakeUpForce`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 39 00`
- **Assembly Address in Memory** : `0x89b4580`

## Parameters

- `(int)reqactor_id` *(8 bytes)* : [Unique ID of the reqactor](./setreqactoruniqueid.md).

## Example

Here is one example in hex:

```25 21 39 00 / 08 00 00 00 / ca 00 00 00```

Which is interpreted as:

```c
wakeUpForce(((global)int *)giVar202)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b4580(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar2 + 0xf8),*puVar1);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    else {
      iVar2 = FUN_0896d6e0(*(undefined4 *)(iVar2 + 0x708));
      if (iVar2 == 0) {
        iVar2 = 0;
      }
    }
  }
  if (iVar2 != 0) {
    *(undefined *)(iVar2 + 0x59c) = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

