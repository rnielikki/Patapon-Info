# startSyncGameFlag

Mark as the player started to join the other's hideout.

## Code Information

- **Name**: `startSyncGameFlag`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 26 00`
- **Assembly Address in Memory** : `0x8b4fdb0`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 26 00```

Which is interpreted as:

```c
startSyncGameFlag()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4fdb0(int param_1,undefined4 param_2)

{
  int iVar1;
  
  iVar1 = *(int *)(*(int *)(*(int *)(param_1 + 0x10) + 500) + 0x6c);
  if (iVar1 == 0) {
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    if ((*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x214) + 0x38) != 0) &&
       (*(char *)(iVar1 + 0x28) == '\0')) {
      FUN_Azito__08b545d8();
    }
    PAC::PAC_setCmdId(param_2,0);
  }
  return;
}
```

